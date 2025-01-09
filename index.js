const allCopyCopounCodeBtns = document.querySelectorAll(".copy-coupon-btn");
console.log(allCopyCopounCodeBtns)
for (let i = 0; i < allCopyCopounCodeBtns.length; i++){
    allCopyCopounCodeBtns[i].addEventListener("click", ()=>{
        const associatedCouponCode = allCopyCopounCodeBtns[i].parentElement.querySelector(".coupon-code").textContent.trim();
        navigator.clipboard.writeText(associatedCouponCode);
        console.log(associatedCouponCode)

    })
}