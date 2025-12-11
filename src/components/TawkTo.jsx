// components/TawkTo.js
import Script from "next/script";

const TawkTo = () => {
  return (
    <Script
      strategy="lazyOnload"
      id="tawk-to-script"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/693a74098a2e581980985f8d/1jc65ai07';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `,
      }}
    />
  );
};

export default TawkTo;
