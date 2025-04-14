import { useState } from 'react'
import './App.css'

function App() {

  // state to track on/off status for each button
  const [buttonStates, setButtonStates] = useState({
    button1: true,
    fan: true,
    button2: true,
    button3 : true
  });

  // state to control sign in modal visibility
  const [showSignIn, setShowSignIn] = useState(false);
  
  // state to store user sign in data
  const [signInData, setSignInData] = useState({
    ipAddress: '',
    email: '',
    name: ''
  });

  // function to toggle button state
  const toggleButton = (buttonName) => {

    setButtonStates(prevState => ({
      ...prevState,
      [buttonName]: !prevState[buttonName]
    }));

  };

  // function to handle input changes in sign in form
  const handleInputChange = (e) => {

    const { name, value } = e.target;
    setSignInData(prevData => ({
      ...prevData,
      [name]: value
    }));

  };

  // Function to handle sign in form submission

  const handleSignInSubmit = (e) => {

    e.preventDefault();
    console.log("User sign in data:", signInData);
    
    // authentication part and firebase request

    setShowSignIn(false);
    alert(`Welcome, ${signInData.name}!`);

  };

  // start of react tree

  return (
    <>

      {/* navbar */}

      <div id='navbar'>

        {/* logo */}

        <div id='logo'>
          {/* <img src="assets/logo.png" alt="" /> */}
        </div>

        <div id="name">Nishchay's Home Automation</div>

        {/* sign in btn */}
        <div id="sign-in">

          <button id='btn' onClick={() => setShowSignIn(true)}>
            Sign In
          </button>

        </div>

      </div>

      {/* Sign In Modal */}

      {showSignIn && (
        <div className="sign-in-modal">

          <div className="sign-in-content">

            <h2>Sign In</h2>
            <form onSubmit={handleSignInSubmit}>

              <div className="form-group">
                <label htmlFor="ipAddress">IP Address:</label>
                <input
                  type="text"
                  id="ipAddress"
                  name="ipAddress"
                  value={signInData.ipAddress}
                  onChange={handleInputChange}
                  placeholder="192.168.123"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={signInData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={signInData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-buttons">
                <button type="submit" className="submit-btn">Sign In</button>
                <button type="button" className="cancel-btn" onClick={() => setShowSignIn(false)}>Cancel</button>
              </div>

            </form>

          </div>

        </div>
      )}

      {/* about  */}

      <div className="about">

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia at voluptatum repellendus deserunt fugiat ab sed vero molestiae ut iusto praesentium veniam deleniti impedit vitae, incidunt tenetur nobis nam. Fuga!
        Nemo assumenda dolorum nesciunt soluta odio sequi rerum omnis, architecto quae laudantium vel nobis natus atque, voluptas sint distinctio. Placeat doloribus dolore aliquam fugiat! Earum illum aspernatur sit quaerat ut.
        Corrupti omnis architecto eligendi laborum eveniet doloremque minima, nulla ratione perferendis nisi, nam ipsa necessitatibus inventore doloribus, reprehenderit tenetur. Perferendis quaerat vel optio alias libero error atque sapiente, explicabo a!
        Placeat, provident nobis? Dolorum repudiandae velit cumque laboriosam fugit consequatur? Porro mollitia, totam inventore quam quis, voluptatem fugiat veniam magnam minus cum commodi facilis voluptatibus, quidem sapiente tempora ut impedit.
        Reprehenderit velit enim consequuntur dolore expedita aliquam quas dolorem natus nisi. Atque magni libero quidem fugit, ratione praesentium alias nihil debitis minima totam eum voluptas nemo reiciendis fuga. Dolorum, sint.</p>

      </div>

      {/* input box */}
      <div className="input-box">

        <div className="url">

          Enter IP Address: 
          <input type="text" placeholder='192.102.211' id='text-box' />
          <img src="src/assets/connect.png" alt="Connect" id='connect' />
          {/* <div id='connect'></div> */}

        </div>

        <br />
        {/* buttons */}

        <div className="on-off-btn">

          <div className="switch1 btn1" onClick={() => toggleButton('button1')}>
            <img 
              src={buttonStates.button1 ? "src/assets/on.png" : "src/assets/off.png"} 
              alt="" 
              className="on-off-btn" 
            />
            <p className="btn-text">Button-1</p>
          </div>
          
          <div className="switch1 btn1" onClick={() => toggleButton('fan')}>
            <img 
              src={buttonStates.fan ? "src/assets/on.png" : "src/assets/off.png"} 
              alt="" 
              className="on-off-btn" 
            />
            <p className="btn-text">Fan</p>
          </div>

          <div className="switch1 btn1" onClick={() => toggleButton('button2')}>
            <img 
              src={buttonStates.button2 ? "src/assets/on.png" : "src/assets/off.png"} 
              alt="" 
              className="on-off-btn" 
            />
            <p className="btn-text">Button-2</p>
          </div>
          
          <div className="switch1 btn1" onClick={() => toggleButton('button3')}>
            <img 
              src={buttonStates.button3 ? "src/assets/on.png" : "src/assets/off.png"} 
              alt="" 
              className="on-off-btn" 
            />
            <p className="btn-text">Button-3</p>
          </div>

        </div>

      </div>

      {/* footer  */}
      <div id='footer'>
        <p id='ftr'> Home Automation || All Rights reserved </p>
      </div>
    </>
  )
}

export default App