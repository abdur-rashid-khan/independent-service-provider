import React from "react";

const Blog = () => {
  return (
    <section style={{ paddingTop: "5rem" }}>
      <div className="container">
        <div>
          <strong>
            {" "}
            01. Difference between authorization and authentication ?{" "}
          </strong>
          <p>authorization : </p>
          <p> 01 . Find out whether users are who they claim to be</p>
          <p>02. Require the user to vaildate details </p>
          <p>03 . transmit info throuth an id token</p>
          <strong>authentication</strong>
          <p>
            01 . Based on predenfined rule determines what user can and can't
            access
          </p>
          <p>02 . access after successfully authorization</p>
          <p>03 . send throuth an access token</p>
        </div>
        {/* qussen number one */}
        <div>
           <strong> 2.  Why are you using firebase? What other options do you have to implement authentication?</strong>
          <p>
            firebase is better but all work do posible firebase-hook name one
            fremwork diye ... this fremwork is very simple using and handel
            other work . firebase-hook fremwork have fairebase all way
          </p>
        </div>
        <div>
           <strong>What other services does firebase provide other than authentication ? </strong>
           <p>01 . firebase provide all user in wesite info</p>
           <p>02 . Different accout  login and sigin  stymes provide</p>
           <p>03 . Email address verification</p>
           <p>04 . mobile number  verification for send OTP code</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
