
import Image from "next/image";

export default function Home() {
    return (
      <div>
        <div className="content">
              <main>
              <div>
            <h1 className = "contact">Contact me!</h1>

            <div className = "contact_me">
                <h2><a className = "linkedin" href = "https://www.linkedin.com/in/vishnu-alachi/" target="_blank">My linkedin</a></h2>

                <form>
        
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Name" style={{ width: '450px' }} required />
                    <br/><br/>
                
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" style={{ width: '450px' }}/>
                    <br/><br/>
                    
                    <label htmlFor="comments">Message</label>
                    <textarea
                    id="comments"
                    name="comments"
                    placeholder="Comments"
                    style={{ width: '450px' }}
                    required
                    ></textarea>
                    <br/><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
              </main>
  
              <footer className="footer">
                  © 2024 Vishnu's Website | All Rights Reserved
              </footer>
      </div>
    </div>
    );
  }
  