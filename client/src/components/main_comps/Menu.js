import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div id='homePage_sec2' className='text-center'>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button id='' type="button" class="btn btn-secondary">Pizza</button>
                <button id='' type="button" class="btn btn-secondary">Steaks</button>
                <button id='' type="button" class="btn btn-secondary">Hoaggies</button>
                <button id='' type="button" class="btn btn-secondary">Pasta</button>
                <button id='' type="button" class="btn btn-secondary">Sides</button>
                <button id='' type="button" class="btn btn-secondary">Drinks</button>
            </div>
        </div>      
      </div>
    );
  }
}

export default Menu;
