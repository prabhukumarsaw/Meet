Hello everyone today i'm going to design Blog website using tailwind step-by-by.

JWT

1. in server

//JWT Authentication create

app.post('/jwt', async(request, response) => {
    const user = request.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1hr'
    })
    response.send({token});
});


2. Verify jwt token

import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    
  
    // Check if the token is present
    if (!req.headers.authorization) {
      return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }
    // Get the token from the request headers
    const token = req.headers.authorization.split(' '[1]);
  
    // Verify the token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden: Invalid token' });
      }
  
      // Attach the user information to the request for further processing
      req.decoded = decoded;
      next();
    });
  };

export default verifyToken




 useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          
            if (currentUser) {
              setUser(currentUser);
              const userInfo = { email: currentUser.email}
              axios.post("http://localhost:5555/jwt", userInfo)
              .then((response) => {
                // console.log(response.data);
                if(response.data.token)
                {
                  localStorage.setItem("access-token", response.data.token);
                }
              })
              
              
              
              .catch((err) => {
                console.log(err)
              });
             
            } else {
              localStorage.removeItem("access-token")
            }
            setLoading(false);
          });
          return () =>{
            return unsubscribe();
          }
    }, [])