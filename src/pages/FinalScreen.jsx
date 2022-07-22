import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import { handleScoreChange, handleAmountChange } from '../redux/actions'

const FinalScreen = () => {
  const { score } = useSelector((state) => state)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0))
    dispatch(handleAmountChange(50))
    history.push('/')
  }

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score}
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined">Back to settings!</Button>
    </Box>
  )
}

export default FinalScreen
