import Link from 'next/link'
import { Chip, Grid, Typography } from '@mui/material'
import { DataGrid, type GridColDef, type GridRenderCellParams } from '@mui/x-data-grid'
import { ShopLayout } from '@/components/layouts'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Full name', width: 250 },
  {
    field: 'paid',
    headerName: 'Paid',
    description: 'Display the information if the order is paid',
    width: 200,
    renderCell: (params: GridRenderCellParams) => {
      return (
        params.row.paid
          ? <Chip color='success' label='Paid' variant='outlined' />
          : <Chip color='error' label='Not paid' variant='outlined' />
      )
    }
  },
  {
    field: 'order',
    headerName: 'view order',
    description: 'Display the information if the order is paid',
    width: 200,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Link href={`/orders/${params.row.id}`}>View order</Link>
      )
    }
  }
]

const rows = [
  { id: 1, paid: true, fullname: 'Juan Perez' },
  { id: 2, paid: true, fullname: 'Maria Lopez' },
  { id: 3, paid: false, fullname: 'Pedro Sanchez' },
  { id: 4, paid: true, fullname: 'Luis Garcia' },
  { id: 5, paid: false, fullname: 'Ana Martinez' },
  { id: 6, paid: true, fullname: 'Juan Perez' }
]

export default function History() {
  return (
    <ShopLayout title='Orders history' pageDescription='Customer order history'>
      <Typography variant='h1' component='h1'>History</Typography>

      <Grid container sx={{ mt: 4 }}>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}
