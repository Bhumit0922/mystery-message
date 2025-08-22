import { Message } from "@/model/User.model";


export interface ApiResponse{
    success: boolean;
    message: string;
    isAccesptingMessage?: boolean
    messages?: Array<Message>
}