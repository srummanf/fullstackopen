import React from 'react'
import Part from './Part'

const Content = (props) => {
    return (
        <>
            <Part part1={props.part1} exercises1={props.exercises1} />
            <Part part1={props.part2} exercises1={props.exercises2} />
            <Part part1={props.part3} exercises1={props.exercises3} />
        </>
    )
}

export default Content
