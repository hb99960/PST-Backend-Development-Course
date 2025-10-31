
export interface createUserBody{
    name:string;
    dept:string
}

export interface UserResponse{
    name:string;
    dept:string;
}

export type ApiResponse<T> = 
{result:string,  data:T} | 
{result:string, message:string, error: string | null}

export interface UserParams{
    userId: string
}