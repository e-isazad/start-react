import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Pagination, TextField, Slider, Select, MenuItem, InputLabel, FormControl, Box as MuiBox, CircularProgress } from '@mui/material';
import { SportsBar } from '@mui/icons-material';

const defaultTheme = createTheme();

function Album() {
  const [search, setSearch] = useState("");
  const [abvRange, setAbvRange] = useState([0, 100]);
  const [loading, setLoading] = useState(false);
  const [beer, setBeer] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    fetchBeers();
  }, [search, abvRange, currentPage, itemsPerPage]);

  const fetchBeers = () => {
    setLoading(true);

    const abvQuery = `&abv_gt=${abvRange[0]}&abv_lt=${abvRange[1]}`;
    const searchQuery = search ? `&beer_name=${search}` : '';
    const paginationQuery = `&per_page=${itemsPerPage}&page=${currentPage}`;

    fetch(`https://api.punkapi.com/v2/beers?${abvQuery}${searchQuery}${paginationQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setBeer(data);
        setNotFound(data.length === 0);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const handleSearch = () => {
    setCurrentPage(1);
  };
  const handleAbvChange = (event, newValue) => {
    setAbvRange(newValue);
  };
  const playSound = () => {
    const audio = new Audio();
    audio.play();
  };

  const handleSpirt = (event, newValue) => {
    setAbvRange(newValue);
    playSound(); 

  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
  };

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AcUnitIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Hello React
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Həci beer <SportsBar sx={{ color:'yellow',fontSize:"48px"}} />
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <TextField
                id="outlined-basic"
                label="beer search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                variant="outlined"
              />
              <Slider
                value={abvRange}
                onChange={handleSpirt}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `${value}%`}
                min={0}
                max={100}
                step={1}
              />
              <Button onClick={handleSearch} variant="contained">
                search
              </Button>
            </Stack>

            <MuiBox sx={{ pt: 2, display: 'flex', justifyContent: 'center' }}>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="items-per-page-label">Items per page</InputLabel>
                <Select
                  labelId="items-per-page-label"
                  id="items-per-page-select"
                  value={itemsPerPage}
                  onChange={handleItemsPerPageChange}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                  <MenuItem value={100}>100</MenuItem>
                </Select>
              </FormControl>
            </MuiBox>
          </Container>
        </Box>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <CircularProgress />
          </Box>
        ) : (
          <React.Fragment>
            {notFound ? (
              <Box sx={{ display: 'flex', color: 'red', justifyContent: 'center', margin: '50px 0' }}>
                <b>NOT FOUND</b>
              </Box>
            ) : (
              <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                  {beer.map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} md={4}>
                      <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                      >
                        <CardMedia
                          component="div"
                          sx={{
                            margin: '0 auto',
                            width: '100px',
                            pt: '200%',
                          }}
                          image={card.image_url}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {card.name}
                          </Typography>
                          <Typography>
                            <b>ABV:</b>
                            {card.abv} <span>%</span>
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" variant="contained">
                            Info
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            )}
          </React.Fragment>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
          <Pagination
            count={Math.ceil(beer.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePaginationChange}
            variant="outlined"
            shape="rounded"
          />
        </Box>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          <b>Həci piyvələri daima sizinlədi</b>
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default Album;
