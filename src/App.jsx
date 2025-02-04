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

            <TwitterFollowCard 
                userName="velasquez"
                >
                    velasquez velez
            </TwitterFollowCard>

            <TwitterFollowCard 
                userName="tatiana"
                initialIsFollowing
                >
                    tatiana valdez
            </TwitterFollowCard>
        </section>
    )
}