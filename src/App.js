import './App.css';

import styled from 'styled-components';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';

// Style component install kia aur phir asay use kar sakty hain css likhnay kay liay
const Container = styled.div`
height:100vh;
  color: white;
  background: url("./img/almas-salakhov-c7k6Z8T9sfM-unsplash.jpg");
   background-size:cover;
// Scroll ko khatam karny kay liay ya use kia hay aur smooth karnay kay liay bhi
scroll-snap-type:y mandatory;
scroll-behavior:smooth;
overflow-y:auto;
scrollbar-width:none;
&::-webkit-scrollbar{
  display:none;
};
`

function App() {
  return (
   <Container>
   <Hero/>
   <Who/>
   <Works/>
   <Contact/>
   
   </Container>
  );
}

export default App;
