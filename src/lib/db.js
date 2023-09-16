const {username , password} = process.env;
export const connectionSrt = "mongodb+srv://"+username +":"+password+"@cluster0.vteuf4e.mongodb.net/First?retryWrites=true&w=majority";