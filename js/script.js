document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    // زر تسجيل الدخول
    document.querySelector("#login button").addEventListener("click", function (event) {
        event.preventDefault();
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        
        if (email === "admin@example.com" && password === "mlLkn") {
            alert("مرحبًا أيها الرئيس! لقد سجلت الدخول بنجاح.");
        } else {
            alert("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
        }
    });

    // زر التسجيل
    document.querySelector("#signup button").addEventListener("click", function (event) {
        event.preventDefault();
        alert("تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.");
    });

    // زر إضافة منتج إلى السلة
    document.querySelectorAll(".card button").forEach(button => {
        button.addEventListener("click", function () {
            alert("تمت إضافة المنتج إلى سلة التسوق!");
        });
    });
});

