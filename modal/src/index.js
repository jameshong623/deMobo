var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
 
var appElement = document.getElementById('your-app-element');
 

// By default the modal is anchored to document.body. All of the following overrides are available.
 
// * element
// Modal.setAppElement(appElement);
 
// * query selector - uses the first element found if you pass in a class.
// Modal.setAppElement('#your-app-element');
 


const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : '#c8cfd6'
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '20%',
    right                      : '20%',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }

};
 
 
var App = React.createClass({
 
  getInitialState: function() {
    return { modalIsOpen: false };
  },
 
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
 
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
 

  render: function() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          className="shortcut-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles} 
          >



          <div>
              <button type="button" className="close" onClick={this.closeModal}>
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
              </button>
              <h4 className="modal-title">Modal title</h4>
          </div>


 
        <div>
		 <table className="nice-table no-stripes">
		    <tbody>
		      <tr>
		        <th colSpan="2">
		        <p>To Play the Video</p>
		        </th>
		      </tr>
		      <tr>
		        <td>Toggle play/pause</td>
		        <td>spacebar or &uarr; (up arrow)</td>
		      </tr>
		      <tr>
		        <td>Hold to play & Release to pause</td>
		        <td>&darr; (down arrow)</td>
		      </tr>
		      
		      <tr>
		        <th colSpan="2">
		        <p>To Move Between Words</p>
		        </th>
		      </tr>
		      <tr>
		        <td>Move to the previous word</td>
		        <td>hold &darr; (down arrow) + &larr; (left arrow)</td>
		      </tr>
		      <tr>
		        <td>Move to the next word</td>
		        <td>hold &darr; (down arrow) + &rarr; (right arrow)</td>
		      </tr>

		      <tr>
		        <th colSpan="2">
		        <p>To Merge Words</p>
		        </th>
		      </tr>
		      <tr>
		        <td>The current word with previous word</td>
		        <td>SHIFT + &larr; (left arrow)</td>
		      </tr>
		      <tr>
		        <td>The current word with next word</td>
		        <td>SHIFT + &rarr; (right arrow)</td>
		      </tr>
		      
		      <tr>
		        <th colSpan="2">
		        <p>Word Formatting</p>
		        </th>
		      </tr>
		      <tr>
		        <td>Navigate through effects or fillers</td>
		        <td>alt + &uarr; (up arrow) or alt + &darr; (down arrow)</td>
		      </tr>
		      <tr>
		        <td>Change format to number</td>
		        <td>alt + &larr; (left arrow)</td>
		      </tr>
		      <tr>
		        <td>Change format to url or email</td>
		        <td>alt + &rarr; (right arrow)</td>
		      </tr>     
		    </tbody>
		  </table>
  		</div>
  		 <br/>
     	 <br/>
     	 <br/>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
});
 
ReactDOM.render(
  <App/>,
  document.getElementById('app')
);