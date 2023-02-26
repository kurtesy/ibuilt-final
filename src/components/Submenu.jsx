import React from 'react'
import BedroomSubmenu from './BedroomSubmenu'
import LivingSubmenu from './LivingSubmenu'

export default function Submenu({ room }) {
  if (room === 'bedroom') return <BedroomSubmenu />
  if (room === 'living') return <LivingSubmenu />
}
