import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container neo-blog ">
      <div className="text-p">
        <div className="text-center title-blog">
          <h2>Our Blogs</h2>
        </div>
        <div>
          <div>
            <strong>
              Q.1: Difference between authorization and authentication
            </strong>{" "}
            <br />
            <strong>Ans.:</strong>
            <p>
              <strong>Authorization:</strong>
              -Authorization determines whether you are authorized to access the
              resources.
              <br /> - It is the process of verifying whether access is allowed
              or not.
              <br />- It determines what user can and cannot access.
              <br /> - Authentication factors required for authorization may
              vary, depending on the security level.
              <br /> - Authorization is done after successful authentication.
            </p>
            <br />
            <p>
              <strong>Authentication:</strong>
              - Authentication confirms your identity to grant access to the
              system. <br />
              -It is the process of validating user credentials to gain user
              access. <br />
              -It determines whether user is what he claims to be. <br />
              -Authentication usually requires a username and a password.
            </p>
            <br />
            <hr />
          </div>

          <div>
            <strong>
              Q.2: Why are you using firebase? What other options do you have to
              implement authentication?
            </strong>
            <br />
            <strong>Ans.:</strong> <br />
            <p>
              Firebase is a complete package of products that allows to build
              web and mobile apps. Firebase allow syncing the real-time data
              across all the devices- Android, iOS, and the web without
              refreshing the screen.
              <br />
              - Create Application without backend server <br />
              - No need extra money spent for backend server <br />- Quick
              display data in the application br - Cloud storage
            </p>
            <br />
            <hr />
          </div>
          <div>
            <strong>
              Q.3: What other services does firebase provide other than
              authentication
            </strong>
            <br />
            <strong>Ans.:</strong> <br />
            <p>
              Firebase manages all data real-time in the database. So, the
              exchange of data to and fro from the database is easy and quick.
              Hence, if you are looking to develop mobile apps such as live
              streaming, chat messaging
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
