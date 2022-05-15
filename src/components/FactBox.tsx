import React, { ReactNode, useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

/**
 * FactBox component
 *
 * Requirements:
 * - A component that displays information
 * - Be able to control the default state of collapse/expansion
 * - Should be able to collapse/expand
 * - Should have different visual variants (Blue, Green, Red)
 * - Be keyboard accessible
 * - Allow a bit of the information to be visible, when collapsed
 */

const variants: Record<Variants, string> = {
  blue: 'bg-blue-100',
  green: 'bg-green-100',
  red: 'bg-red-100',
}

const buttonVariants: Record<Variants, string> = {
  blue: 'bg-blue-200 hover:bg-blue-300',
  green: 'bg-green-200 hover:bg-green-300',
  red: 'bg-red-200 hover:bg-red-300',
}

const headerVariants: Record<Variants, string> = {
  blue: 'bg-blue-300',
  green: 'bg-green-300',
  red: 'bg-red-300',
}

type Variants = 'blue' | 'green' | 'red'

export type Props = {
  /**
   * The title of the fact box
   */
  title: string

  /**
   * The content of the fact box
   */
  content: ReactNode

  /**
   * The color of the fact box
   */
  variant?: Variants

  /**
   * The default state of the fact box
   */
  defaultState?: 'collapsed' | 'expanded'
}

export const FactBox = ({
  content,
  defaultState = 'collapsed',
  title,
  variant = 'blue',
}: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultState === 'collapsed')

  const wrapperVariants = {
    collapsed: {
      height: 100,
    },
    expanded: {
      height: 'auto',
    },
  }

  return (
    <div
      className={clsx(
        'flex w-full flex-col shadow transition-colors',
        variants[variant]
      )}
    >
      <div className={clsx(headerVariants[variant])}>
        <h2 className="px-6 py-4 text-2xl font-bold">{title}</h2>
      </div>

      <motion.div
        variants={wrapperVariants}
        className={clsx('overflow-hidden')}
        initial={!isCollapsed ? 'expanded' : 'collapsed'}
        animate={isCollapsed ? 'collapsed' : 'expanded'}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <motion.div className="p-6" aria-hidden={isCollapsed}>
          {content}
        </motion.div>
      </motion.div>

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={clsx(
          'border-t p-4 font-medium transition-colors',
          buttonVariants[variant]
        )}
      >
        Read {isCollapsed ? 'more' : 'less'}
      </button>
    </div>
  )
}
