import React from 'react'
import '../css/signIn.css'
export default function SignIn() {
    return (
        <div>
            <div>
                <h4>Event hive</h4>
                <button>Login</button>
                <button>Logout</button>
            </div>
           <div>
            <h2>Create Event</h2>
            <form >
                <label >Event Title : 
                    <br /><input type="text" />
                </label>
                <br /><label >Event Venue :
                    <br /><input type="text" />
                </label>
               
              <br />  <label >Start time :
                    <br /><input type="text" />
                </label>
                <label >
                End time :
                <input type="text" />
               </label>
                <br /><label >Start date :
                    <br /><input type="text" />
                </label>
                <label >End date :
                    <input type="text" />
                </label>
            </form></div>
           <div>
           <h2>Create Description</h2>
           <form >
           <label >Event image : 
                <input type="text" />
             </label>
             <label >Event decriotion : 
                <input type="text" />
             </label>
            </form>  
           </div>
           <div>
            <button>Create Event</button>
           </div>
        </div>
    )
}