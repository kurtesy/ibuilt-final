import React from 'react'
import BedroomSubmenu from './BedroomSubmenu'
import LivingSubmenu from './LivingSubmenu'

export default function Submenu({ roomType, id }) {
  if (roomType === 'bedroom') return <BedroomSubmenu id={id} />
  if (roomType === 'living') return <LivingSubmenu id={id} />
}
