const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const addressSchema = new mongoose.Schema({
    houseNumber:String,
    landmark:String,
    area:String
})

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:{
        type:String,
        require:true,
        minlength:8,
    },
    interest:[{
        type:String,
        enum:["frontend", "backend", "fullstack"]
    }],
    marks:{
        type:Number,
        min:0,
        max:100
    },
    isActive: Boolean,
    address:[addressSchema],
    skills:[{
        tech:{
            type:String,
            enum:["frontend", "backend", "fullstack"]
        },
        level:{
            type:String,
            enum:["beginner", "intermediate", "advance"]
        }
    }],
    role:{
        type:String,
        enum:["admin", "student", "instructor"],
        require:true,
        default:"student"
    },
    refreshToken:{
        type:String
    }
},{timestamps:true})
// mongoose.Model (the class constructor) instead of mongoose.model (the factory function).
// In Mongoose:
// mongoose.model(name, schema) → correct way to create a model.
// mongoose.Model → internal class, rarely used directly.

userSchema.virtual("isPassed").get(function () {
    return this.marks >= 40;
  });
  
// userSchema.virtual("skillCount").get(function () {
// return this.skills.length;
// });

// For displaying virtuals in JSON response
userSchema.set("toJSON", { virtuals: false });
//   userSchema.set("toObject", { virtuals: true });

// Pre-save middleware for hashing passwords
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next(); // Skip if password is not modified
    }

    try {
        const salt = await bcrypt.genSalt(10); // Generate salt
        this.password = await bcrypt.hash(this.password, salt); // Hash the password
        next();
    } catch (err) {
        next(err); // Pass error to the next middleware
    }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const User = new mongoose.model("users", userSchema);

module.exports = User;

