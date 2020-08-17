import React from "react";
import { Divider } from "antd";
import { useMediaQuery } from "react-responsive";

const Content = () => {
        const mediaSIze = useMediaQuery({
          query: "(min-width:1000px)",
        });
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "90vh",
        marginTop: "12vh",
        display: "flex",
        alignItems: "center",
        // justifyContent:"center",
        flexDirection: "column",
        padding: !mediaSIze ? "3rem 10vw" : "5rem 18vw",
      }}
    >
      <p
        style={{
          fontWeight: 600,
     // fontFamily: "Inter-SemiBold",

          fontSize: !mediaSIze ? 32 : 48,
          lineHeight: "52px",
          color: "#111111",
        }}
      >
        Privacy Policy
      </p>
      <Divider />
      <p
        style={{
          fontSize: 17,
          lineHeight: "25px",
        }}
      >
        Tyche Ventures Private Limited built the Pracify app as a Freemium app.
        This SERVICE is provided by Tyche Ventures Private Limited at no cost
        and is intended for use as is. This page is used to inform visitors
        regarding our policies with the collection, use, and disclosure of
        Personal Information if anyone decided to use our Service.
        <br />
        <br />
        If you choose to use our Service, then you agree to the collection and
        use of information in relation to this policy. The Personal Information
        that we collect is used for providing and improving the service. We will
        not use or share your information with anyone except as described in
        this Privacy Policy.
        <br />
        <br />
        <span
          style={{
       // fontFamily: "Inter-SemiBold",

            fontWeight: 600,
            fontSize: 24,
            lineHeight: "28px",
            color: "#111111",
          }}
        >
          Information Collection and Use
        </span>
        <br />
        <br />
        For a better experience, while using our Service, we may require you to
        provide us with certain personally identifiable information, including
        but not limited to Full Name, Contact Number, Email Address, Bank
        Account & Paytm Wallet. The information that we request will be retained
        by us and used as described in this privacy policy.
        <br />
        <br />
        The app does use third-party services that may collect information used
        to identify you. Link to the privacy policy of third party service
        providers used by the app
        <br />
        <br />
        <ul>
          <li>
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play Services
            </a>
          </li>
        </ul>
        <br />
        <span
          style={{
       // fontFamily: "Inter-SemiBold",

            fontWeight: 600,
            fontSize: 24,
            lineHeight: "28px",
            color: "#111111",
          }}
        >
          Log Data
        </span>
        <br />
        <br />
        We want to inform you that whenever you use our Service, in a case of an
        error in the app we collect data and information (through third party
        products) on your phone called Log Data. This Log Data may include
        information such as your device Internet Protocol (“IP”) address, device
        name, operating system version, the configuration of the app when
        utilizing our Service, the time and date of your use of the Service, and
        other statistics.
        <br />
        <br />
        <span
          style={{
       // fontFamily: "Inter-SemiBold",

            fontWeight: 600,
            fontSize: 24,
            lineHeight: "28px",
            color: "#111111",
          }}
        >
          Cookies
        </span>
        <br />
        <br />
        Cookies are files with a small amount of data that are commonly used as
        anonymous unique identifiers. These are sent to your browser from the
        websites that you visit and are stored on your device's internal memory.
        <br />
        <br />
        This Service does not use these “cookies” explicitly. However, the app
        may use third party code and libraries that use “cookies” to collect
        information and improve their services. You have the option to either
        accept or refuse these cookies and know when a cookie is being sent to
        your device. If you choose to refuse our cookies, you may not be able to
        use some portions of this Service.
        <br />
        <br />
        <span
          style={{
       // fontFamily: "Inter-SemiBold",

            fontWeight: 600,
            fontSize: 24,
            lineHeight: "28px",
            color: "#111111",
          }}
        >
          Service Providers
        </span>
        <br />
        <br />
        We may employ third-party companies and individuals due to the following
        reasons:
        <br />
        <br />
        <ul>
          {[
            "To facilitate our Service;",
            "To provide the Service on our behalf;",
            "To perform Service-related services; or",
            "To assist us in analyzing how our Service is used.",
          ].map((i, k) => (
            <li key={k}>{i}</li>
          ))}
        </ul>
        We want to inform users of this Service that these third parties have
        access to your Personal Information. The reason is to perform the tasks
        assigned to them on our behalf. However, they are obligated not to
        disclose or use the information for any other purpose.
        <br />
        <br />
        <span
          style={{
       // fontFamily: "Inter-SemiBold",

            fontWeight: 600,
            fontSize: 24,
            lineHeight: "28px",
            color: "#111111",
          }}
        >
          Security
        </span>
        <br />
        <br />
        We value your trust in providing us your Personal Information, thus we
        are striving to use commercially acceptable means of protecting it. But
        remember that no method of transmission over the internet, or method of
        electronic storage is 100% secure and reliable, and we cannot guarantee
        its absolute security.
        <br />
        <br />
        <span
          style={{
       // fontFamily: "Inter-SemiBold",

            fontWeight: 600,
            fontSize: 24,
            lineHeight: "28px",
            color: "#111111",
          }}
        >
          Links to Other Sites
        </span>
        <br />
        <br />
        This Service may contain links to other sites. If you click on a
        third-party link, you will be directed to that site. Note that these
        external sites are not operated by us. Therefore, we strongly advise you
        to review the Privacy Policy of these websites. We have no control over
        and assume no responsibility for the content, privacy policies, or
        practices of any third-party sites or services.
        <br />
        <br />
        <span
          style={{
       // fontFamily: "Inter-SemiBold",

            fontWeight: 600,
            fontSize: 24,
            lineHeight: "28px",
            color: "#111111",
          }}
        >
          Children’s Privacy
        </span>
        <br />
        <br />
        These Services do not address anyone under the age of 16. We do not
        knowingly collect personally identifiable information from children
        under 16. In the case we discover that a child under 16 has provided us
        with personal information, we immediately delete this from our servers.
        If you are a parent or guardian and you are aware that your child has
        provided us with personal information, please contact us so that we will
        be able to do the necessary actions.
        <br />
        <br />
        <span
          style={{
       // fontFamily: "Inter-SemiBold",

            fontWeight: 600,
            fontSize: 24,
            lineHeight: "28px",
            color: "#111111",
          }}
        >
          Changes to This Privacy Policy
        </span>
        <br />
        <br />
        We may update our Privacy Policy from time to time. Thus, you are
        advised to review this page periodically for any changes. We will notify
        you of any changes by posting the new Privacy Policy on this page.
        <br />
        <br />
        This policy is effective as of 2020-06-29
        <br />
        <br />
        <span
          style={{
       // fontFamily: "Inter-SemiBold",

            fontWeight: 600,
            fontSize: 24,
            lineHeight: "28px",
            color: "#111111",
          }}
        >
          Contact Us
        </span>
        <br />
        <br />
        If you have any questions or suggestions about our Terms and Conditions,
        do not hesitate to contact Shivam Malhotra at
        <a style={{ marginLeft: 10 }} href="mailto:shivam@pracify.com">
          shivam@pracify.com.
        </a>
      </p>
    </div>
  );
};

export default Content;
