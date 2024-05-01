import './App.css'
import { ProductCard } from './Compoenents';

function App() {

  return (
    <>
      <div className='container'>
        <ProductCard
          productName="SONY WH-1000XM4"
          price="19,999.59"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus gravida massa placerat tempor. Fusce auctor orci magna, sit amet luctus diam hendrerit sit amet. Donec vitae sapien eget dui pulvinar sagittis vitae non metus. Maecenas pulvinar tortor vitae mattis pulvinar. Integer ultricies, nisl in tempor maximus, lacus enim pretium."
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTngrwfHHYiAvdz-9SpI5CqHRZFAvvQjYnQ&s"
        />

        <ProductCard
          productName="Macbook Air"
          price="80,000.00"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus gravida massa placerat tempor. Fusce auctor orci magna, sit amet luctus diam hendrerit sit amet. Donec vitae sapien eget dui pulvinar sagittis vitae non metus. Maecenas pulvinar tortor vitae mattis pulvinar. Integer ultricies, nisl in tempor maximus, lacus enim pretium."
          imageUrl="https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"
        />
        <ProductCard
          productName="iPhone 13"
          price="49000.78"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus gravida massa placerat tempor. Fusce auctor orci magna, sit amet luctus diam hendrerit sit amet. Donec vitae sapien eget dui pulvinar sagittis vitae non metus. Maecenas pulvinar tortor vitae mattis pulvinar. Integer ultricies, nisl in tempor maximus, lacus enim pretium."
          imageUrl="https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lfGVufDB8fDB8fHww"
        />
        <ProductCard
          productName="Cool Keyboard"
          price="4,999.99"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus gravida massa placerat tempor. Fusce auctor orci magna, sit amet luctus diam hendrerit sit amet. Donec vitae sapien eget dui pulvinar sagittis vitae non metus. Maecenas pulvinar tortor vitae mattis pulvinar. Integer ultricies, nisl in tempor maximus, lacus enim pretium."
          imageUrl="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtleWJvYXJkfGVufDB8fDB8fHww"
        />
        <ProductCard
          productName="Logitech MX-Master3s"
          price='8,999.90'
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus gravida massa placerat tempor. Fusce auctor orci magna, sit amet luctus diam hendrerit sit amet. Donec vitae sapien eget dui pulvinar sagittis vitae non metus. Maecenas pulvinar tortor vitae mattis pulvinar. Integer ultricies, nisl in tempor maximus, lacus enim pretium."
          imageUrl="https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE1vdXNlfGVufDB8fDB8fHww"
        />
        <ProductCard/>
      </div>
    </>
  )
}

export default App
