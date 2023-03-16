import "../css/footer.css";
function Footer() {
    return (
        <>
            <div>
                <div className="footer1">
                    <p className="footer1Title">+ Books categories</p>
                    <div className="footer1Body">
                        <div className="footer1Group">
                            <p className="footer1Item">Architecture</p>
                            <p className="footer1Item">Art</p>
                            <p className="footer1Item">Action</p>
                            <p className="footer1Item">Biography &amp; Autobiography</p>
                            <p className="footer1Item">Body, Mind &amp; Spirit</p>
                        </div>
                        <div className="footer1Group">
                            <p className="footer1Item">Business &amp; Economics</p>
                            <p className="footer1Item">Children Fiction</p>
                            <p className="footer1Item">Children Non-Fiction</p>
                            <p className="footer1Item">Comics &amp; Graphic Novels</p>
                            <p className="footer1Item">Cooking</p>
                        </div>
                        <div className="footer1Group">
                            <p className="footer1Item">Crafts &amp; Hobbies</p>
                            <p className="footer1Item">Design</p>
                            <p className="footer1Item">Drama</p>
                            <p className="footer1Item">Education</p>
                            <p className="footer1Item">Family &amp; Relationships</p>
                        </div>
                        <div className="footer1Group">
                            <p className="footer1Item">Fiction</p>
                            <p className="footer1Item">Foreign Language Study</p>
                            <p className="footer1Item">Games</p>
                            <p className="footer1Item">Gardening</p>
                            <p className="footer1Item">Health &amp; Fitness</p>
                        </div>
                        <div className="footer1Group">
                            <p className="footer1Item">History</p>
                            <p className="footer1Item">House &amp; Home</p>
                            <p className="footer1Item">Humor</p>
                            <p className="footer1Item">Literary Collections</p>
                            <p className="footer1Item">Mathematics</p>
                        </div>
                        <div className="footer1Group">
                            <p className="footer1Item">Medical</p>
                            <p className="footer1Item">Nature</p>
                            <p className="footer1Item">Performing Arts</p>
                            <p className="footer1Item">Pets</p>
                            <p className="footer1Item" id="showOthers">Show others</p>
                        </div>
                    </div>
                </div>
                <div className="footer2">
                    <div className="footer2Left">
                        <img src="../image/logo1.png" alt="" />
                        <p>Bookland is a Book Store Ecommerce Website Template by Peterdraw lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                        <div className="iconList">
                            <img src="../image/social01.png" alt="" />
                            <img src="../image/social02.png" alt="" />
                            <img src="../image//social03.png" alt="" />
                            <img src="../image/social04.png" alt="" />
                            <img src="../image//social05.png" alt="" />
                        </div>
                    </div>
                    <div className="footer2Right">
                        <p className="getIn">Get in Touch With Us</p>
                        <div className="footer2RightBody">
                            <div className="footer2RightBody1">
                                <div className="footer2Content">
                                    <i className="fa-solid fa-location-dot" />
                                    <span>832  Thompson Drive, San Fransisco
                                         CA 94107, United States</span>
                                </div>
                                <div className="footer2Content">
                                    <i className="fa-solid fa-phone" />
                                    <span>+123 345123 556</span>
                                </div>
                                <div className="footer2Content">
                                    <i className="fa-solid fa-envelope" id="footerMail"/>
                                    <span>support@bookland.id</span>
                                </div>
                            </div>
                            <div className="footer2RightBody2">
                                <img src alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer3">
                    <div className="footer3Left">Bookland Book Store Ecommerce Website -   © 2020 All Rights Reserved</div>
                    <div className="footer3Right">
                        <span>Made with <i className="fa-solid fa-heart" id="heart" /> by Peterdraw</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;