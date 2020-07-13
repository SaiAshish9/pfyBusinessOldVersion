import React from 'react'
import {Divider} from 'antd'
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
            fontFamily: "Inter-SemiBold",
            fontSize: !mediaSIze?32:48,
            lineHeight: "52px",
            color: "#111111",
          }}
        >
          Terms & Conditions
        </p>
        <Divider />
        <p
          style={{
            fontSize: 17,
            lineHeight: "25px",
          }}
        >
          By downloading or using the app, these terms will automatically apply
          to you – you should make sure therefore that you read them carefully
          before using the app. You’re not allowed to copy or modify the app,
          any part of the app, or our trademarks in any way. You’re not allowed
          to attempt to extract the source code of the app, and you also
          shouldn’t try to translate the app into other languages or make
          derivative versions. The app itself, and all the trademarks,
          copyright, database rights and other intellectual property rights
          related to it, still belong to Tyche Ventures Private Limited.
          <br />
          <br />
          Tyche Ventures Private Limited is committed to ensuring that the app
          is as useful and efficient as possible. For that reason, we reserve
          the right to make changes to the app or to charge for its services, at
          any time and for any reason. We will never charge you for the app or
          its services without making it very clear to you exactly what you’re
          paying for.
          <br />
          <br />
          The Pracify app stores and processes personal data that you have
          provided to us, in order to provide our Service. It’s your
          responsibility to keep your phone and access to the app secure.
          <br />
          <br />
          We, therefore, recommend that you do not jailbreak or root your phone,
          which is the process of removing software restrictions and limitations
          imposed by the official operating system of your device. It could make
          your phone vulnerable to malware/viruses/malicious programs,
          compromise your phone’s security features and it could mean that the
          Pracify app won’t work properly or at all.
          <br />
          <br />
          The app does use third party services that declare their own Terms and
          Conditions. Link to Terms and Conditions of third party service
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
          You should be aware that there are certain things that Tyche Ventures
          Private Limited will not take responsibility for. Certain functions of
          the app will require the app to have an active internet connection.
          The connection can be Wi-Fi or provided by your mobile network
          provider, but Tyche Ventures Private Limited cannot take
          responsibility for the app not working at full functionality if you
          don’t have access to Wi-Fi, and you don’t have any of your data
          allowance left.
          <br />
          <br />
          If you’re using the app outside of an area with Wi-Fi, you should
          remember that your terms of the agreement with your mobile network
          provider will still apply. As a result, you may be charged by your
          mobile provider for the cost of data for the duration of the
          connection while accessing the app, or other third party charges. In
          using the app, you’re accepting responsibility for any such charges,
          including roaming data charges if you use the app outside of your home
          territory (i.e. region or country) without turning off data roaming.
          If you are not the bill payer for the device on which you’re using the
          app, please be aware that we assume that you have received permission
          from the bill payer for using the app.
          <br />
          <br />
          Along the same lines, Tyche Ventures Private Limited cannot always
          take responsibility for the way you use the app i.e. You need to make
          sure that your device stays charged – if it runs out of battery and
          you can’t turn it on to avail the Service, Tyche Ventures Private
          Limited cannot accept responsibility.
          <br />
          <br />
          With respect to Tyche Ventures Private Limited’s responsibility for
          your use of the app, when you’re using the app, it’s important to bear
          in mind that although we endeavor to ensure that it is updated and
          correct at all times, we do rely on third parties to provide
          information to us so that we can make it available to you. Tyche
          Ventures Private Limited accepts no liability for any loss, direct or
          indirect, you experience as a result of relying wholly on this
          functionality of the app.
          <br />
          <br />
          At some point, we may wish to update the app. The app is currently
          available on Android & iOS – the requirements for both systems(and for
          any additional systems we decide to extend the availability of the app
          to) may change, and you’ll need to download the updates if you want to
          keep using the app. Tyche Ventures Private Limited does not promise
          that it will always update the app so that it is relevant to you
          and/or works with the Android & iOS version that you have installed on
          your device. However, you promise to always accept updates to the
          application when offered to you, We may also wish to stop providing
          the app, and may terminate use of it at any time without giving notice
          of termination to you. Unless we tell you otherwise, upon any
          termination, (a) the rights and licenses granted to you in these terms
          will end; (b) you must stop using the app, and (if needed) delete it
          from your device.
          <br />
          <br />
          <span
            style={{
              fontFamily: "Inter-SemiBold",
              fontWeight: 600,
              fontSize: 24,
              lineHeight: "28px",
              color: "#111111",
            }}
          >
            Changes to This Terms and Conditions
          </span>
          <br />
          <br />
          We may update our Terms and Conditions from time to time. Thus, you
          are advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Terms and Conditions on
          this page.
          <br />
          <br />
          These terms and conditions are effective as of 2020-06-29
          <br />
          <br />
          <span
            style={{
              fontFamily: "Inter-SemiBold",
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
          If you have any questions or suggestions about our Terms and
          Conditions, do not hesitate to contact Shivam Malhotra at
          <a style={{ marginLeft: 10 }} href="mailto:shivam@pracify.com">
            shivam@pracify.com.
          </a>
        </p>
      </div>
    );
}
 
export default Content
