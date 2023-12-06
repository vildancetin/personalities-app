# Personalities App

I initially set up the project structure and added components. In the ```main.jsx``` file, I retrieved data from ```data.j```s and utilized it to render Card components using the map function. 
The Card component receives props and is structured to display the provided data.
### Render Component 
```javascript
 {
data.map((type) => {
          return <Card key={type.id} {...type} />;
        })
}
```
### Get Values
```javascript
const Card = ({ title, desc, image, type,category }) => {}
```
### Sass Section
In the Sass section, I defined static values such as mixins, variables, and a reset, and applied some styling. 
Notably, when hovering over a Card, additional content is revealed, disappearing when the mouse is moved away.
### Outcome
![personalities](https://github.com/vildancetin/personalities-app/assets/75564722/f6660829-b925-4635-8a68-59c447f6e6aa)
### Demo
[Demo](https://personalitiestypes.netlify.app/)

Data was taken from https://www.16personalities.com/

