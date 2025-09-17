const createUserBtn = document.getElementById("create-user")
const userName = document.getElementById("username")
const localVideo = document.getElementById("localVideo")
const remoteVideo = document.getElementById("remoteVideo")
const endCallBtn = document.getElementById("end-call-btn")
const allUsersHTML = document.getElementById("allusers")

const socket = io("http://192.168.1.81:9002");
let localStream;
let callers = [];
// IIFE
// Singleton Design Pattern


const PeerConnection = (function(){

    let peerConnection;

    const createPeerConnection = () => {
        const config = {
            iceServers:[
                {
                    urls: 'stun:stun.l.google.com:19302'
                }
            ]
        }
        peerConnection = new RTCPeerConnection(config);

        localStream.getTracks().forEach(track =>{
            peerConnection.addTrack(track, localStream);
        })

        peerConnection.ontrack = (event) =>{
            remoteVideo.srcObject = event.streams[0];
        }

        peerConnection.onicecandidate = (event) =>{
            if(event.candidate){
                socket.emit("icecandidate", event.candidate);
                console.log("iceCandidate: ", event.candidate);
            }
        }

        return peerConnection;
    }


    return {
        getInstance: ()=>{
            if(!peerConnection){
                peerConnection = createPeerConnection();
            }

            return peerConnection;
        }
    }

})()



socket.on("joined", allUsers=>{
    console.log("All Users: ", {allUsers});
    allUsersHTML.innerHTML = ""
    for(const user in allUsers){
        const li = document.createElement("li");
        li.textContent = `${user} ${user === userName.value? "(You)": ""}`;
        if(user !== userName.value){
            const button = document.createElement("button");
            button.classList.add("call-btn");
            button.textContent = "Call";
            button.addEventListener("click", (e)=>{
                startCall(user);
            })

            li.appendChild(button);
        }

        allUsersHTML.appendChild(li);
    }
})

socket.on("offer", async ({from, to, offer})=>{
    const pc = PeerConnection.getInstance();
    await pc.setRemoteDescription(offer);
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    socket.emit("answer", {from, to, answer:pc.localDescription});
    callers = [from, to];
})

socket.on("answer", async ({from, to, answer})=>{
    console.log({from, to, answer});
    const pc = PeerConnection.getInstance();
    await pc.setRemoteDescription(answer);
    callers = [from, to];
})

socket.on("icecandidate", async candidate => {
    console.log({ candidate });
    const pc = PeerConnection.getInstance();
    await pc.addIceCandidate(new RTCIceCandidate(candidate));
});

socket.on("call-ended", (callers) =>{
    endCall();
})


createUserBtn.addEventListener("click", (e)=>{
   
    if(userName.value!== ""){
        // alert(userName.value)
        socket.emit("join-user", userName.value);
    }
})

endCallBtn.addEventListener("click", (e)=>{
    socket.emit("call-ended", callers);
})

const startCall = async (user) =>{
    console.log({user});
    const pc = PeerConnection.getInstance();
    const offer = await pc.createOffer();
    console.log({offer});
    await pc.setLocalDescription(offer);
    socket.emit("offer", {from:userName.value, to:user, offer:pc.localDescription});
}

const endCall = ()=>{
    const pc = PeerConnection.getInstance();
    if(pc){
        pc.close();
    }
}

const startMyVideo = async ()=>{
    try{
        const stream =  await navigator.mediaDevices.getUserMedia({audio:true, video:true});
        console.log(stream)
        // console.log(localVideo);
        localVideo.srcObject = stream;
        localStream = stream;
    } catch(error){;
        console.log("Error starting my video : ", error);
    }
}

startMyVideo();



