import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
    return (
        <section className='App'>
            <TwitterFollowCard
                initialIsFollowing
                userName="CristhianDevCod">
                    Cristhian Velasquez
            </TwitterFollowCard>

            <TwitterFollowCard 
                userName="Andres"
                >
                    Manuel Antonio
            </TwitterFollowCard>

            <TwitterFollowCard 
                userName="Yisus"
                >
                    Jesus Sacarias
            </TwitterFollowCard>
        </section>
    )
}