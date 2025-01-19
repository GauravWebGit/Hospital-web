export const isLogin =() =>{
    const fData=localStorage.getItem("user");

    if(fData === "1213"){
        return true;
    }else{
        return false;
    }
}