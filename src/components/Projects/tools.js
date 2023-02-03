import './Tools.css'

function Tools({tech}) {
    return (
        <>
            <div className='skills'>

            {tech.map(tool => {
                return (
                    <div key={tool} className='tech-stack'>{tool}
                    </div>
                )
            })}

            </div>
        </>
    )
}

export default Tools
