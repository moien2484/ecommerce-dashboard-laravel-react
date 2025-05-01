// import React, { useState } from "react";
// import "./login.css";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault(); // جلوگیری از ریفرش صفحه

//     try {
//       const response = await fetch("https://api.php/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Login Success:", data);

//       // مثال: ذخیره توکن یا ریدایرکت بعد از لاگین موفق
//       // localStorage.setItem("token", data.token);
//       // window.location.href = "/dashboard";

//     } catch (error) {
//       console.error("Login Error:", error);
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         {/* بخش راست */}
//         <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
//           <div className="section-wrapper-right">
//             <div className="section-right-bg "></div>
//             <div className="section-data-right">
//               <div className="body-section-right">
//                 <img className="body-section-right-img" src="img/2.png" alt="" />
//                 <h2>با ورود شدن به سایت با مشخصات شخصی خود با ما در ارتباط باشید</h2>
//                 <p>اکنون با استفاده از اطلاعات شخصی خود وارد شوید تا از اتصال بی‌نظیر و تجربیات شخصی‌شده لذت ببرید.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* بخش چپ */}
//         <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 position-relative">
//           <div className="section-wrapper-left">
//             <div className="form-sign-in">
//               <form onSubmit={handleLogin}>
//                 <div className="header-form-sign">
//                   <h2>وارد شوید</h2>
//                   <p>لطفا برای ورود به حساب کاربری خود وارد شوید</p>
//                 </div>

//                 {/* ورودی‌ها */}
//                 <div className="input-sign">
//                   <input
//                     placeholder="ایمیل ..."
//                     type="text"
//                     name="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <input
//                     placeholder="رمز عبور ..."
//                     type="password"
//                     name="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />

//                   <div className="sub-input-sign">
//                     <p>رمز عبور را فراموش کرده اید؟</p>
//                     <div className="remember">
//                       <div><input type="checkbox" /></div>
//                       <p>مرا به خاطر بسپار</p>
//                     </div>
//                   </div>

//                   {/* دکمه ورود */}
//                   <div className="btn-sign rounded">
//                     <button type="submit">وارد شوید</button>
//                   </div>
//                 </div>
//               </form>

//               {/* سایر بخش‌ها */}
//               <div className="d-flex align-items-center justify-content-center mt-3">
//                 <div className="line-title-icons-sign"></div>
//                 <p className="title-icons-sign">ورود با</p>
//                 <div className="line-title-icons-sign"></div>
//               </div>

//               <div className="icons-login">
//                 <div><i className="bx bxl-facebook"></i></div>
//                 <div><i className="bx bxl-linkedin"></i></div>
//                 <div><i className="bx bxl-telegram"></i></div>
//                 <div><i className="bx bxl-google"></i></div>
//               </div>

//               <div className="Dont-account">
//                 <p>حساب کاربری ندارید؟</p>
//                 <p>اکنون ایجاد کنید</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }