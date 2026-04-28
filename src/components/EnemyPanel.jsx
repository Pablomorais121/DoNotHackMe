function EnemyPanel({enemy}){
    return (
        <div>
            <p>---------------------</p>
            <p>Enemy data</p>
            <p>{enemy.hp}</p>
            <p>---------------------</p>
        </div>
    )
}

export default EnemyPanel