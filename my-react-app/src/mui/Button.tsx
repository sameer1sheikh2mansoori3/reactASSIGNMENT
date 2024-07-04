import * as React from 'react';
import Button from '@mui/material/Button';


export default function ButtonUsage({ text }: { text: 'string' }) {
  return <Button variant="contained">{text}</Button>
}