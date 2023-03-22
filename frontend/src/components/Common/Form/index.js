import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import Input from './Input'
import Button from '../Button'
import useAddCountry from '../../../hooks/useAddCountry'
import useUpdateCountry from '../../../hooks/useUpdateCountry'

export default function Form({ label, Country }) {
  const [country, setCountry] = useState(null)
  const [area, setArea] = useState(null)
  const [totalPopulation, setTotalPopulation] = useState(null)
  const [year, setYear] = useState(null)
  const router = useRouter()

  const { addCountry } = useAddCountry()
  const { updateCountry } = useUpdateCountry()

  useEffect(() => {
    if (Country) {
      setCountry(Country.country)
      setArea(Country.area)
      setTotalPopulation(Country.totalPopulation)
      setYear(Country.year)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!country || !area || !totalPopulation || !year) {
      toast.info('Please first fill all details')
      return ''
    }
    if (Country) {
      const countryData = {
        country: country,
        area: parseInt(area),
        totalPopulation: parseInt(totalPopulation),
        year: year,
        id: Country.id,
      }

      updateCountry(countryData).then(() => {
        router.push('/')
      })
      return ''
    }
    const countryData = {
      country: country,
      area: parseInt(area),
      totalPopulation: parseInt(totalPopulation),
      year: year,
    }

    addCountry(countryData).then(() => {
      router.push('/')
    })
  }

  return (
    <form action="" className="flex flex-col  font-bold space-y-5 px-8">
      <div className="flex space-x-3 items-center">
        <label htmlFor="country" className="w-[30%]">
          Country Name:
        </label>
        <Input
          Value={country}
          onChange={setCountry}
          type="text"
          placeholder="Enter Country Name"
        />
      </div>
      <div className="flex space-x-3 items-center">
        <label className="w-[30%]" htmlFor="totalPopulation">
          Total Population:
        </label>
        <Input
          Value={totalPopulation}
          onChange={setTotalPopulation}
          type="number"
          placeholder="Enter Total Population"
        />
      </div>
      <div className="flex space-x-3 items-center">
        <label className="w-[30%]" htmlFor="area">
          Area(in km²):
        </label>
        <Input
          Value={area}
          onChange={setArea}
          type="number"
          placeholder="Enter Country Area in km²"
        />
      </div>
      <div className="flex space-x-3 items-center">
        <label className="w-[30%]" htmlFor="year" type="text">
          Year Of Record:
        </label>
        <Input
          Value={year}
          onChange={setYear}
          placeholder="Enter The year Of Recording"
          type="number"
        />
      </div>
      <Button text={label} handleClick={handleSubmit} type="submit" />
    </form>
  )
}
