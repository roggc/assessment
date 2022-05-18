import classes from './GameCard.module.css'

const GameCard=({name,img})=><div className={classes.card}>
    <img src={img} alt='ups!' className={classes.img} />
    <div className={classes.name}>{name}</div>
</div>

export default GameCard