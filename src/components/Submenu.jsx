import React from 'react'
import BedroomSubmenu from './BedroomSubmenu'
import LivingSubmenu from './LivingSubmenu'
import KitchenSubmenu from './KitchenSubmenu'

export default function Submenu({ roomType, id }) {
  if (roomType === 'bedroom') return <BedroomSubmenu id={id} />
  if (roomType === 'living') return <LivingSubmenu id={id} />
  if (roomType === 'kitchen') return <KitchenSubmenu id={id} />
}
