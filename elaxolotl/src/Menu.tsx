import logo from './assets/logo.png'
import './App.css'

function Menu() {
  return (
    <>
      <section className="landing">
        <img
          src={logo}
          className="main-logo"
          alt="El Axolotl Logo"
        />

        <h1 className="menu-title">Menu</h1>
      </section>

         {/* APPETIZERS */}

      <section className="appetizers">
        <h2 className="appetizers-title">Appetizers</h2>

        <h4 className="appetizers-options">
          Guacamole - $8.95
        </h4>

        <h4 className="appetizers-options">
          Alas de Pollo (Chicken Wings) Plain - $12.95
        </h4>

        <h4 className="appetizers-options">
          Alas de Pollo (Chicken Wings) BBQ - $13.95
        </h4>

        <h4 className="appetizers-options">
          Esquites (Corn kernels cooked with aromatic herbs and served with lemon juice, salsa, mayo, and cheese) Spicy - $6.95
        </h4>

        <h4 className="appetizers-options">
          Elote Preparado (Boiled corn with mayo, lemon juice, and chili powder) - $9.95
        </h4>

      </section>

        {/* SALADS */}

      <section className="salads">
     <h2 className="salads-title">Salads</h2>

        <h4 className="salads-options">
          Ensalada regular (House Mix Salad) - $6.95
        </h4>

        <h4 className="salads-options">
          Ensalada Cesar (Cesar Salad Small) - $6.95
        </h4>

        <h4 className="salads-options">
          Ensalada Cesar con Pollo (Cesar Salad with Chicken) - $14.95
        </h4>   

        <h4 className="salads-options">
          Ensalada con Aguacate (Avocado Salad with lettuce, tomatoes, onions, cucumber, avocado and corn) - $9.95
        </h4>

        <h4 className="salads-options">
          Ensalada con Aguacate con Pollo (with Chicken) - $16.95
        </h4>

        <h4 className="salads-options">
          Ensalada con Aguacate con Carne Asada (with Steak) - $17.95
        </h4>

        <h4 className="salads-options">
          Ensalada con Aguacate con Camarones (with Shrimp) - $18.95
        </h4>

        <section className="soups">
        <h2 className="Soups-title">Soups(coming soon)</h2>
        
        <h4 className="soups-options">
          Sopa del dia (Soup of the Day) - $7.95
        </h4>

        <h4 className="soups-options">
          Sopa del Tortilla (Tortilla Soup) - $7.95
        </h4>

        <h4 className="soups-options">
          Sopa de Frioles (Bean Soup) - $6.95
        </h4>

        <h4 className="soups-options">
          Sopa Friolles Charros (Bean soup with Pork and Pico De Gallo) - $8.95
        </h4> 

        <h4 className="soups-options">
          Sopa de Pescado (Small Fish Soup) - $10.95
        </h4>

        <h4 className="soups-options">
          Sopa de Pescado Grande (Large Fish Soup) - $18.95
        </h4>

        <h4 className="soups-options">
          Sopa de Mariscos (Large Seafood Soup) - $19.95
        </h4>
        </section>

              {/* TACOS */}

      <section className="tacos">
        <h2 className="tacos-title">Tacos</h2>

        <h4 className="tacos-options">
          Carne Asada (Steak) - 1 for $5.25 / 3 for $14.95
        </h4>

        <h4 className="tacos-options">
          Pollo Asado (Chicken) - 1 for $5.25 / 3 for $14.95
        </h4>

        <h4 className="tacos-options">
          Lengua (Beef Tongue) - 1 for $6.50 / 3 for $17.95
        </h4>

        <h4 className="tacos-options">
          Lengua al Chipotle (Beef Tongue in Chipotle Sauce) - 1 for $6.50 / 3 for $17.95
        </h4>

        <h4 className="tacos-options">
          Al Pastor (Red Chili Marinated Pork with Pineapple) - 1 for $5.50 / 3 for $15.99
        </h4>

        <h4 className="tacos-options">
          Chorizo (Mexican Sausage) - 1 for $5.25 / 3 for $14.95
        </h4>

        <h4 className="tacos-options">
          Camarones (Shrimp) - 1 for $5.95 / 3 for $15.95
        </h4>

        <h4 className="tacos-options">
          Vegetales - 1 for $5.25 / 3 for $14.95
        </h4>
      </section>

      {/* TORTAS */}

      <section className="tortas">
        <h2 className="tortas-title">Tortas</h2>

        <h4 className="tortas-options">
          Carne Asada (Steak) - $15.99
        </h4>

        <h4 className="tortas-options">
          Pollo Asado (Chicken) - $15.99
        </h4>

        <h4 className="tortas-options">
          Al Pastor (Red Chili Marinated Pork with Pineapple) - $15.99
        </h4>

        <h4 className="tortas-options">
          Chorizo (Mexican Sausage) - $15.99
        </h4>

        <h4 className="tortas-options">
          Camarones (Shrimp) - $15.99
        </h4>

        <h4 className="tortas-options">
          Vegetales - $14.99
        </h4>

        <h4 className="tortas-options">
          Jamon (Ham) - $14.99
        </h4>

        <h4 className="tortas-options">
          La Cubana (Breaded chicken, ham, frankfurter, cheese, avocado, beans, lettuce, tomato, onion, and mayo) - $18.99
        </h4>
      </section>

      {/* NACHOS */}

      <section className="nachos">
        <h2 className="nachos-title">Nachos</h2>

        <h4 className="nachos-options">
          Carne Asada (Steak) - $15.99
        </h4>

        <h4 className="nachos-options">
          Pollo Asado (Chicken) - $14.99
        </h4>

        <h4 className="nachos-options">
          Queso (Cheese) - $12.99
        </h4>
      </section>

      {/* DRINKS */}

      <section className="drinks">
        <h2 className="drinks-title">Drinks</h2>

        <h4 className="drinks-options">
          Jarritos
        </h4>

        <h4 className="drinks-options">
          Sangria Senorial
        </h4>

        <h4 className="drinks-options">
          Coke
        </h4>

        <h4 className="drinks-options">
          Coke Zero
        </h4>

        <h4 className="drinks-options">
          Sprite
        </h4>

        <h4 className="drinks-options">
          Pellegrino
        </h4>

        <h4 className="drinks-options">
          Ginger Ale
        </h4>

        <h4 className="drinks-options">
          Iced Tea
        </h4>

        <h4 className="drinks-options">
          Cranberry Juice
        </h4>

        <h4 className="drinks-options">
          Orange Juice
        </h4>

        <h4 className="drinks-options">
          Apple Juice
        </h4>

        <h4 className="drinks-options">
          Lemonade
        </h4>

        <h4 className="drinks-options">
          Tamarindo Juice
        </h4>

        <h4 className="drinks-options">
          Pineapple Juice
        </h4>
      </section>

      {/* MARGARITAS */}

      <section className="margaritas">
        <h2 className="margaritas-title">Margaritas</h2>

        <h4 className="margaritas-options">Regular</h4>
        <h4 className="margaritas-options">Fresa (Strawberry)</h4>
        <h4 className="margaritas-options">Mango</h4>
        <h4 className="margaritas-options">Maracuya (Passion Fruit)</h4>
        <h4 className="margaritas-options">Coco (Coconut)</h4>
        <h4 className="margaritas-options">Mora (Raspberry)</h4>
        <h4 className="margaritas-options">Tamarindo</h4>
      </section>

      {/* MOJITOS */}

      <section className="mojitos">
        <h2 className="mojitos-title">Mojitos</h2>

        <h4 className="mojitos-options">Lemon</h4>
        <h4 className="mojitos-options">Mango</h4>
        <h4 className="mojitos-options">Strawberry</h4>
        <h4 className="mojitos-options">Coconut</h4>
        <h4 className="mojitos-options">Passion Fruit</h4>
        <h4 className="mojitos-options">Orange</h4>
      </section>

      {/* JUICES */}

      <section className="juices">
        <h2 className="juices-title">Jugos (Juices)</h2>

        <h4 className="juices-options">Passion Fruit</h4>
        <h4 className="juices-options">Mango</h4>
        <h4 className="juices-options">Strawberry</h4>
        <h4 className="juices-options">Banana</h4>
        <h4 className="juices-options">Raspberry</h4>
      </section>




    
      </section>
    </>
  )
}

export default Menu