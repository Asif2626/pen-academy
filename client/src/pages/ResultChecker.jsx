import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle'

const boards = [
  {
    name: 'BISE Lahore',
    url: 'https://result.biselahore.com/',
  },
  {
    name: 'BISE Gujranwala',
    url: 'https://www.bisegrw.com/',
  },
  {
    name: 'BISE Rawalpindi',
    url: 'https://www.biserawalpindi.edu.pk/',
  },
  {
    name: 'BISE Multan',
    url: 'https://web.bisemultan.edu.pk/',
  },
  {
    name: 'BISE Faisalabad',
    url: 'https://bisefsd.edu.pk/',
  },
  {
    name: 'BISE Sargodha',
    url: 'https://www.bisesargodha.edu.pk/',
  },
  {
    name: 'BISE Sahiwal',
    url: 'https://bisesahiwal.edu.pk/',
  },
  {
    name: 'BISE Bahawalpur',
    url: 'https://bisebwp.edu.pk/',
  },
  {
    name: 'BISE D.G. Khan',
    url: 'https://www.bisedgkhan.edu.pk/',
  },
]

const classes = [
  '9th Class',
  '10th Class',
  '11th Class',
  '12th Class',
]

export default function ResultChecker() {
  const [board, setBoard] = useState('')
  const [className, setClassName] = useState('')
  const [rollNumber, setRollNumber] = useState('')

  const handleCheckResult = (e) => {
    e.preventDefault()

    if (!board) {
      alert('Please select your board.')
      return
    }

    if (!className) {
      alert('Please select your class.')
      return
    }

    if (!rollNumber.trim()) {
      alert('Please enter your roll number.')
      return
    }

    const selectedBoard = boards.find(
      (item) => item.name === board
    )

    if (!selectedBoard) {
      return
    }

    window.open(
      selectedBoard.url,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <main className="min-h-screen bg-slate-50 py-14 dark:bg-slate-950">
      <div className="container-px mx-auto max-w-7xl">

        <SectionTitle
          eyebrow="Punjab Boards"
          title="Check Punjab Board Result"
          description="Select your board, class and enter your roll number to check your examination result."
        />

        <div className="mx-auto mt-8 max-w-3xl">
          <div className="card p-6 sm:p-8">

            <form onSubmit={handleCheckResult}>

              {/* Board */}
              <div className="mb-5">
                <label
                  htmlFor="board"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Select Board
                </label>

                <select
                  id="board"
                  value={board}
                  onChange={(e) => setBoard(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:ring-brand-500/20"
                >
                  <option value="">
                    Select your board
                  </option>

                  {boards.map((item) => (
                    <option
                      key={item.name}
                      value={item.name}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Class */}
              <div className="mb-5">
                <label
                  htmlFor="className"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Select Class
                </label>

                <select
                  id="className"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:ring-brand-500/20"
                >
                  <option value="">
                    Select your class
                  </option>

                  {classes.map((item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Roll Number */}
              <div className="mb-6">
                <label
                  htmlFor="rollNumber"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Roll Number
                </label>

                <input
                  id="rollNumber"
                  type="text"
                  inputMode="numeric"
                  placeholder="Enter your roll number"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:placeholder:text-slate-400 dark:focus:ring-brand-500/20"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
              >
                Check Result →
              </button>

            </form>

            <div className="mt-6 rounded-lg bg-blue-50 p-4 text-sm text-blue-800 dark:bg-blue-500/10 dark:text-blue-300">
              <strong>Important:</strong> You will be redirected
              to the selected board's official result website.
            </div>

          </div>
        </div>

        {/* All Punjab Boards */}
        <div className="mx-auto mt-12 max-w-5xl">

          <h2 className="mb-5 text-center text-2xl font-bold text-slate-900 dark:text-slate-100">
            Punjab Boards
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {boards.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover flex items-center justify-between p-5"
              >
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {item.name}
                </span>

                <span className="font-bold text-brand-700 dark:text-brand-500">
                  →
                </span>
              </a>
            ))}
          </div>

        </div>

      </div>
    </main>
  )
}
