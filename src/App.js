import './App.css';

const schoolName = <h3>Codetrain Africa</h3>;

function App() {
  return (
    <div style={{display: 'flex'}}>
    <div className='codetrain__info' style={{width: '100%', order: 1}}>
    <p className="heading" style={{fontSize: 20, marginTop: '5rem', padding: '2rem'}}>React is a JavaScript Framework and it <span>Rocks!</span> i enjoy React because i can create reuseable components and use them all over my project and by the way PROPS is Awesome.</p>
    <h3 style={{fontSize: 20, paddingLeft: '2rem', color: 'gray'}}>Beyond Coding, I Am Growing In My Problem Solving Skills. Codetrain Africa Is A Great School.</h3>
    <button style={{width: '40%', backgroundColor: 'black', color: 'white', height: '2.5rem', fontSize: '1.5rem', margin: '2rem', cursor: 'pointer'}}>Register Now</button>
    </div>
      <div className='btn' style={{width: '100%', order: 2, marginTop: '2.5rem'}}>
      <img src='https://codetraingh.com/static/graduants-40312fad110b4aabfa6973b49e6ae2c7.jpg' style={{height: '350px', width: '100%', borderTopRightRadius: '120px', borderBottomLeftRadius: '120px', position: 'relative'}} alt='Codetrain Demo Day'/>
      <p style={{fontSize: 20, paddingLeft: '2rem', color: 'red', position: 'absolute', top: 0, paddingTop: '8rem'}}>{schoolName} DEMO DAY 2022</p>
      </div>
		</div>
  );
}

export default App;


