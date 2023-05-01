import './header.css'
import people from '../../assets/people.png'
import possibilityImage from '../../assets/possibility.png';




const Header = () => {
    return ( 
        <div className="BnB__header section__padding" id="home">
            <div className="BnB__header-content">
                <h1 className='gradient__text'>
                Let's Build Something amazing with BnB OpenAi
                </h1>
                <p>From predictive analytics to natural language processing, our platform offers a range of advanced capabilities to help you stay ahead of the curve. Discover what AI can do for you today!</p>


                <div className="BnB__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>
                <div className="BnB__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>

            </div>
                <div className="BnB__header-image">
                <img src={possibilityImage} alt="ai" />

                </div>
        </div>
        );
}
 
export default Header;