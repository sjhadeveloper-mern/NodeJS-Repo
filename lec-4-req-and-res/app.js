// Simple nodeJS Server

// const http = require("http");


// const server = http.createServer((req,res)=>{
//   console.log(req.url, req.method, req.headers);
//   if(req.url=== '/'){
//   res.setHeader('Content-Type','Text/html');
//   res.write('<html>');
//   res.write('<head><title>Welcome to home</title></head>');
//   res.write('<body>Welcome to home</body>');
//   res.write('</html>');
//   return res.end();

//   }else if(req.url==='/products'){
//       res.setHeader('Content-Type','Text/html');
//   res.write('<html>');
//   res.write('<head><title>welcome to our products</title></head>');
//   res.write('<body>welcome to our products</body>');
//   res.write('</html>');
//    return res.end();
//   }
//   res.setHeader('Content-Type','Text/html');
//   res.write('<html>');
//   res.write('<head><title>Node JS Programming</title></head>');
//   res.write('<body>page not found 404</body>');
//   res.write('</html>');
// // process.exit();  / exit event loop
// });

// server.listen(3001,()=>{
//     console.log("Server running on port 3001")
// });



const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
if(req.url === '/'){
    res.setHeader('Content-Type','Text/html');
    res.write(`
<html>
<head>
    <title>QuickLearn</title>
</head>
<body style="margin:0; font-family:Arial, sans-serif; background-color:#f5f5f5;">

    <!-- Navbar -->
    <div style="background-color:#6a0dad; padding:15px; color:white; display:flex; justify-content:space-between;">
        <h2 style="margin:0;">QuickLearn</h2>
       <div>
    <a href="/" style="color:white; margin:10px; text-decoration:none;">Home</a>
    <a href="/about" style="color:white; margin:10px; text-decoration:none;">About</a>
    <a href="/contact" style="color:white; margin:10px; text-decoration:none;">Contact</a>
</div>
    </div>

    <!-- Hero Section -->
    <div style="text-align:center; padding:80px 20px; background-color:white;">
        <h1 style="color:#6a0dad;">Welcome to QuickLearn</h1>
        <p style="color:gray;">Powered by SRGCTI | Founder Suraj Jha</p>
        <button style="padding:10px 20px; background-color:#6a0dad; color:white; border:none; border-radius:5px;">
            Get Started
        </button>
    </div>

    <!-- About Section -->
    <div style="padding:50px 20px; text-align:center;">
        <h2 style="color:#6a0dad;">About Us</h2>
        <p style="max-width:600px; margin:auto; color:#555;">
            QuickLearn is a platform designed to help students learn skills quickly and efficiently.
            We focus on practical knowledge and real-world applications.
        </p>
    </div>

    <!-- Contact Section -->
    <div style="padding:50px 20px; text-align:center; background-color:white;">
        <h2 style="color:#6a0dad;">Contact Us</h2>
        <input type="text" placeholder="Your Name" 
            style="padding:10px; margin:10px; width:250px;"><br>
        <input type="email" placeholder="Your Email" 
            style="padding:10px; margin:10px; width:250px;"><br>
        <textarea placeholder="Your Message" 
            style="padding:10px; margin:10px; width:250px;"></textarea><br>
        <button style="padding:10px 20px; background-color:#6a0dad; color:white; border:none; border-radius:5px;">
            Send Message
        </button>
    </div>

    <!-- Footer -->
    <div style="background-color:#6a0dad; color:white; text-align:center; padding:15px;">
        © 2026 QuickLearn | All Rights Reserved
    </div>

</body>
</html>`);
return res.end();

}else if(req.url === "/about"){
res.write(`
<html>
<head>
    <title>About - QuickLearn</title>
</head>
<body style="margin:0; font-family:Arial, sans-serif; background-color:#f5f5f5;">

    <!-- Navbar -->
    <div style="background-color:#6a0dad; padding:15px; color:white; display:flex; justify-content:space-between; align-items:center;">
        <h2 style="margin:0;">QuickLearn</h2>
        <div>
            <a href="index.html" style="color:white; margin:10px; text-decoration:none;">Home</a>
            <a href="about.html" style="color:white; margin:10px; text-decoration:none;">About</a>
            <a href="#" style="color:white; margin:10px; text-decoration:none;">Contact</a>
        </div>
    </div>

    <!-- About Section -->
    <div style="padding:80px 20px; text-align:center; background-color:white;">
        <h1 style="color:#6a0dad; font-size:40px;">About Us</h1>

        <p style="max-width:700px; margin:20px auto; color:#555; font-size:18px; line-height:1.6;">
            QuickLearn is a modern learning platform designed to help students gain practical skills quickly.
            We focus on real-world knowledge like programming, video editing, and digital skills.
        </p>

        <p style="max-width:700px; margin:20px auto; color:#555; font-size:18px; line-height:1.6;">
            Powered by SRGCTI, our mission is to make learning simple, fast, and effective for everyone.
        </p>

        <div style="margin-top:30px;">
            <h3 style="color:#6a0dad;">Founder</h3>
            <p style="color:#333; font-size:18px;">Suraj Jha</p>
        </div>

        <a href="index.html" style="display:inline-block; margin-top:30px; padding:12px 25px; background-color:#6a0dad; color:white; text-decoration:none; border-radius:5px;">
            Back to Home
        </a>
    </div>

    <!-- Footer -->
    <div style="background-color:#6a0dad; color:white; text-align:center; padding:15px;">
        © 2026 QuickLearn | All Rights Reserved
    </div>

</body>
</html>`);

return res.end();
}else if(req.url === "/about#"){
    res.write(`
<html>
<head>
    <title>Contact - QuickLearn</title>
</head>
<body style="margin:0; font-family:Arial, sans-serif; background-color:#f5f5f5;">

    <!-- Navbar -->
    <div style="background-color:#6a0dad; padding:15px; color:white; display:flex; justify-content:space-between; align-items:center;">
        <h2 style="margin:0;">QuickLearn</h2>
        <div>
            <a href="index.html" style="color:white; margin:10px; text-decoration:none;">Home</a>
            <a href="about.html" style="color:white; margin:10px; text-decoration:none;">About</a>
            <a href="contact.html" style="color:white; margin:10px; text-decoration:none;">Contact</a>
        </div>
    </div>

    <!-- Contact Section -->
    <div style="padding:80px 20px; text-align:center; background-color:white;">
        <h1 style="color:#6a0dad; font-size:40px;">Contact Us</h1>

        <p style="color:#555; font-size:18px;">
            Have any questions? Feel free to reach out!
        </p>

        <!-- Form -->
        <form style="margin-top:30px;">
            <input type="text" placeholder="Your Name" required
                style="width:280px; padding:12px; margin:10px; border:1px solid #ccc; border-radius:5px;"><br>

            <input type="email" placeholder="Your Email" required
                style="width:280px; padding:12px; margin:10px; border:1px solid #ccc; border-radius:5px;"><br>

            <textarea placeholder="Your Message" required
                style="width:280px; padding:12px; margin:10px; border:1px solid #ccc; border-radius:5px; height:100px;"></textarea><br>

            <button type="submit"
                style="padding:12px 25px; background-color:#6a0dad; color:white; border:none; border-radius:5px; cursor:pointer;">
                Send Message
            </button>
        </form>

        <!-- Extra Info -->
        <div style="margin-top:40px;">
            <p style="color:#333;">📧 Email: support@quicklearn.com</p>
            <p style="color:#333;">📍 Location: India</p>
        </div>
    </div>

    <!-- Footer -->
    <div style="background-color:#6a0dad; color:white; text-align:center; padding:15px;">
        © 2026 QuickLearn | All Rights Reserved
    </div>

</body>
</html>`);

return res.end();
}else{

    res.write(`<h1>404 page not found</h1>`);
    
return res.end();
}


});

const port = 3003;
server.listen(port,()=>{
    console.log('Server is running on port '+ 'http://localhost:'+ port);
})