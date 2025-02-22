document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector("#signup form");
    const loginForm = document.querySelector("#login form");

    // ✅ التحقق من قوة كلمة المرور
    function isPasswordStrong(password) {
        return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
    }

    // ✅ التسجيل
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.querySelector("#new-email").value;
        const password = document.querySelector("#new-password").value;

        // 🔴 منع كلمة المرور الضعيفة
        if (!isPasswordStrong(password)) {
            alert("يجب أن تكون كلمة المرور 8 أحرف على الأقل وتحتوي على حرف كبير ورقم.");
            return;
        }

        // 🔵 تخزين بيانات المستخدم في Local Storage
        let users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            alert("هذا البريد الإلكتروني مسجل مسبقًا.");
        } else {
            users.push({ email, password });
            localStorage.setItem("users", JSON.stringify(users));
            alert("تم التسجيل بنجاح! تحقق من بريدك الإلكتروني.");
            sendVerificationEmail(email);
        }
    });

    // ✅ تسجيل الدخول
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert("تم تسجيل الدخول بنجاح!");
            window.location.href = "dashboard.html"; // 🔹 توجيه المستخدم إلى صفحة حسابه
        } else {
            alert("البريد الإلكتروني أو كلمة السر غير صحيحة.");
        }
    });

    // ✅ إرسال رسالة تأكيد إلى البريد الإلكتروني
    function sendVerificationEmail(email) {
        const verificationLink = `https://yourwebsite.com/verify?email=${encodeURIComponent(email)}`;
        Email.send({
            SecureToken: "your-smtp-token", // 🔹 استخدم خدمة SMTP مجانية مثل smtpjs.com
            To: email,
            From: "mohammed.taha.25102000@gmail.com", // بريدك الإلكتروني
            Subject: "تأكيد حسابك في TahaZon",
            Body: `مرحبًا بك في TahaZon! يرجى تأكيد حسابك عبر هذا الرابط: <a href='${verificationLink}'>اضغط هنا</a>.`
        }).then(message => alert("تم إرسال رسالة التحقق إلى بريدك الإلكتروني."));
    }
});
