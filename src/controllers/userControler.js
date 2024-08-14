
const registerUser = ({
    name,
    email,
    password,
    address,
    latitude,
    longitude,
}) => {

    if (!name || !email || !password || !address || !latitude || !longitude) {
        return { message: "all fields are required !, please fill up all fields" }
    }
    if (password.length < 8) {
        return { message: "password must be 8 charecter or more!" }
    }

    try {

        const userData = {
            name,
            email,
            password,
            address,
            latitude,
            longitude,
        };

        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('isAuthenticate', true)
        const res = getUser()
         // update state using redux
        return { message: `wellcome ${name} , explore UserMart! . Your one-stop solution for all your product needs.` }

    } catch (error) {

        return { message: `somthing error , try again !` }

    }


}



const loginUser = ({email , password})=>{
    if(!email || !password){
        return { message: "all fields are required !, please fill up all fields" }
    }

    try {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user && user.email === email && user.password === password){
            localStorage.setItem('isAuthenticate' , true)
            const res = getUser()
             // update state using redux
            return { message: `wellcome back ${user.name} , continue your exploring .` , data:user }
        }else{
            return { message: `email or password not matched !` }

        }
    } catch (error) {
        return { message: `somthing error , try again !` }
        
    }
}


const logoutUser = (name)=>{
    try {
        localStorage.setItem('isAuthenticate' , false)
         // update state using redux
        return {message:`Goodbye, ${name}! You have successfully logged out of UserMart. We look forward to your return.`}
    } catch (error) {
        return { message: `somthing error , try again !` }
        
    }
}


const getUser = ()=>{
    try {
        const isAuthenticate = localStorage.getItem('isAuthenticate')

        if(isAuthenticate){
            const user = JSON.parse(localStorage.getItem())
            // update state using redux
            return {message:'user fatched ! '}
        }else{
            return {message:'user not authenticate , login now!'}
        }
    } catch (error) {
        return { message: `somthing error , try again !` }
        
    }
}

export { registerUser , loginUser , logoutUser , getUser}