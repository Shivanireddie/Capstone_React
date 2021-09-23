import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://static.straitstimes.com.sg/s3fs-public/styles/article_pictrure_780x520_/public/articles/2016/07/11/dbs1.jpg?itok=tx1i_5rD&timestamp=1468218086')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontFamily: 'Roboto',
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {

    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  },
  Typography:{
    color: "#0000000"
  }
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div className="App">
      {/* <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary" >
           DBS
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Box className={classes.hero}>
        
        <Box ml={40} fontSize={40} fontFamily={'Roboto'}>LIVE MORE <br/>
        BANK LESS</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
         WHO WE ARE
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIWFhUXGB0YFxUYGBkeGBsYGRgaHRkZIBkYHSggHRolHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy8lICYtLy0tLy0tLy0tLS0vLS0tLS0tLS0tLS0tLSstLS0tLy0tLS0tLS0tLS0tLS0tLy0tLf/AABEIAJYBTwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAIDBAUBBwj/xABAEAACAQIEAwYDBgYCAAUFAAABAhEAAwQSITEFQVEGEyJhcYEyQpEHFKGxwfAjM1Ji0eFyghUkorLxFjRTY5L/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QANBEAAQMCBAQEBQMEAwAAAAAAAQACEQMhEjFBUQRhcfATgaGxIpHB0eEFIzIUQlLxM2Ky/9oADAMBAAIRAxEAPwDzVlio6u4eyDJJqHGWAp8JlTsf0NAnubF1XpUqVUqBTTXDTjTDQogUqdatljE6c6Vq2WYKNyYHIfXkPOinGcAspbKrcVyqyxHN41g7R0oTZauHpmof935TBjzWZg0UWmBTNB3HxNzUqf6qdj3zHNZuspKQ0FxK/KCBz1aiPsLgcLeV+/aDAK6heusnmNNKwsbwpReOS40AkSOk6R61njC7GTuu8x3iU/AptmA2dLG4wnWAbzz/AOxV/jD4hsFbdkTKCpcjcj4VMct6GbGHe4jwN3GvITH5b1qXbmIFvuS2ewrDMNc7LOZtP2as2cXasMbeVlzHN8LZdo0//moauEfAJPfd/mmf0+N01nYWxBBtcyMzY31BgnSFy6PuRkzcW4NTswdPzBmgy/dzEnYchRh9ovaq1i2sph0y2rKBZIEs3Pb5BsPc89Ao0+nTw5mTvuuPxvF+NDWiGiYGxOd9ZN/ayQr0z7Ku3NrD3DaxnwsAqXzrkjZWn5DPxcoE6ajzMCkDB2pozlYg9wBAMA2Pv7r27tlj1F2593kq0EqpIXNGunPr70KdoeJCxYUj+Y/wiNBp8R9Pz96Hez/HzbGS4M1sbRuvl/x/L8Ksu93E4PE3cpbuL1t2MSFS4pQDXYSorN4OJ5Lhz/H3XdqfqbafDM8EmSAL5iNefL/YQvcYkkkyTqSaZXWNcrWuDK5TlUkwBJrhNFvAeztyVLjKWBMnkP6Y/qM89o9aFz2t/kU2jw1SsYpiVBgHSwhtsksxi63y5J184An86N+za4Q3vHkTwaXDbYDKToNBqTUeH7Ip3LXM4LKSROm2oBE89KenCLuIuIli4FiTcZhoBp6yJNZ6seI0sz56+QvC9Fwge2g5tWABAGECW5zJMCbzrrckoS7UMoxFxLR/h5tBljT4p15HeKZwXAm5c8AmBJJ8Ma/v6VvYzAWrK3LF9kbESQzfMWYyhXmBBXbQU/gGBNliQ4IKwwIHxKdOfrTPEAZh191mPCVH8Q2s27ZBzkt2GZGecWziBCObHa/Dpw/7swJuZGtZdPmnWN/mmvJe03BTIe3b8RDFgNiBz/5fnRFeVUfvGGZ84OnzHN4FA8xlEVf7Z8ZYG0Xt5UAMtpvpC6E/v3pQLjdpuBAG++ui2P4aiGObUENeS5xm7TNtLc9hMzC8jBpwFE2O4Bcu2mxa5dZbJzKjc+ukxzoYFaQZXmqtB1I3Fjkdxv8AjMK9YACHXVj57Dfl1j6VXdRJ1/Cp7roxGRSqhQILZjIiWkKNzrEc6rONTVJei6pg6H3rb4VxBFIdwZUeUkmYgfuJrItARSfc0BFoTKdQ03B4zF/MKxjca11y7ew5AdBUIpq04UERZC57nEucZJVvA4vI07r8yTEj15HzrcsRejDYYZs5yrJhgratPmNdfKhqtTs/xq5hbq3bcSCDqAduYnnqfrQFoOYW3hOMdS+An4TI6T7AmJjaRfP0zs/wnDYazeXGIWugSJc7RoVzQS0g8tIoKbCd8yqoyBBOeP8A0r+voK0+IcfvYvPdLasIUwJ0G0DQb0Mfd8RbOmbMV+UhtKQXB5hsCO7rt1Huo0wXNc9r4Jw3AiIwzGZvpNro04bxjHYhRgrbFlDFYBOqrJ1+m1W8NhEw5uJibcXJGhB+GNOXrrVbsbxcYO4l1kBlMpUGD4gJIJ56fnVfttxm5jbhuIFt7KBM6DqY3qhUaAHEy7K9xCe4VKbiMHwEYpaQHF5000zJ6zkEHgaac6YwjQ1ZuWcoGtQtbnWa6WRgrxhu2yqssU2rptg6VUdY0qBJc3CmGuGumrWCw4MsdhsOZNUbK6bS4wErCZd9GMR5A1o2LHxAs0EdYqK7hA7Egxp+NX8BaF11UNEg9NfrSDLoAzXaoBtMHFkPa8yndmuKW1u+NWywQYgGfKfSouKlbmfJIBfTyIPlpWfdw4tYgq5kBjJ9t9PWtW3iMN3dxCQJnXpmHL36VbmEEAdfPqmcPWDmuL8z8OcWjbIWm+wWPeL2TkDGDr5+f5U3j/FAwyW+Y8Tc4Oy/hrT+MolmArZmYc4MDr71gNUbTa6HH7fNIr8XUpY6LDAOkzhGwPOflZQmuNUlPurv6/v8qeuYorPP0pXuXpT7BE7Hbr79PKnsV0kfieWnIVFNFHYWZ+vtrT3usuZQxCtGYSYMGRI5wddadhyCSAseHr5iosSNR/xFWi/tUVKlWvwLhgutmueGypAZupOyA9TOvQe1RxgSipU3VHhrc+/ZafYrALmOIdA+T+UhPhNwbM39o6dfSj7tJie9sWFRijqwLEKB8pELB19NuflWHfw6m4y2jByDMqnKANQp9eVMwHFrTGzZWZXQKQfDlUzE7Hl71k8V5kgW9hn3ZempcLQoNaxxvO8YjlA1m8QCCCsjiOLu289k3WIOrEzMH8tqIrfFPulxLyvlIJQE6iCJgg7/AACs/jOCuXLxZAuXIIzGDmlug1qk2CvXRbVkyjcsWzbD+n5fSjs8NJIEZx073QAVKPiNDS4OjCCCQL5E3EX1IyzVnFCziWuYi48szSzyVywANuQ0r0PsCcOt1zdKzk8OfUbiTrz/AN15zZIsrcssheBMgeFlb+rpEGtTEWCcgVis6gjmscj7illxa8G5Gk7QE9tBtXh3MgNc4AOwgAzJnreRmbTeCFudrbtgYtmtAd2GUnKPDm0LEeU1X7fYpcWLKWxaXLJOW3A5deevtr1qLCcRsW8Het3EzXFLAuRtm1U5t9Aw2061kXxdNxe6K7Nnz66aZT4arG5t2kXv0TBSY4APBOAYcxJBgE2M/wCj0FjhfZ3F3LITNKlsoUAarmiJ3j8Kp9u/s9u4XLcBViwJKqSQYjNGg8Wo05+tbfZviN+0bZvOCFuBmyT8Ief2K9URsNj9/GLfSQAW26GfDTqXxA4Tfyg+QXN479oNFRk0oMm5c3/GSSYIJHI5GQvlXD7fvqKbcGp1/cV6P9pvZ+yl9jhxDqctxANGMiLgj5ogMOZ13mfOLm/0/IU8kHJcepSdTjEMxI5jdS2Y61y4BO5+n+6dYG58v8U26PEaWUs5KW0um3SmHc1LbGn0qE70BVJwpCnWbLNooJ6+XmTyHrUptovxNJ6Lt7tt9JoVJWl2c4192c5rYu23EOh38nU8nB9jqD1BNjsa115tIqhRBzDIZOoGUdB1imdmuE2Vw7X72lxvDZsgEZZIi65O7dFmOZ1iM/iNllNzuSqjLmf/AJaz/wBssUmo8O+G3vrr2V6D9OZXo0y9wdE5R8WX9s2vabaEyVRwVq6XXKp2LS+0fkOVTg2cnd3i+bMc6jNIYf8AHSKa3Fb5ghMumxG/nrUHDLrC8tyM7GSfcb1ZY4iTbofrklU6lKk4U6UukwS9siDAJAsSfudwmOwU602yoYxtJrmXeTUt66IAit1lwjOZSxKBDEzpVa+w05nrTLjyajqQlOqGIXDWit5Y0OkbdKzzTQapzZV0qppmyIsZgVVFfPM6RpzH+qrYfFqctsDWYnl61DgcWAV01H7mpcYFZmYHKd/Q9aAgaroU3ugFpnWfomY7AtmYiNtPPSoOH4MMSGkGJA2061u8Ja0MwvkmRoZj1pvf2yV13nnv/ihJcBAKaKVN1TE8HnORnv5oZx/DnA7zKcp5/r6VmkUdvfdkgMCgaJjSJ2nqKycb2bdw1yyhaD4lUE6dRHPy+nSiD7wlV+DIaXs8+/p7oWIqZxof3uP91wsRpqKu4HBXLzBUmTHiJhV21ZtgNG+hozYSsLReAs6wviHKdJ9RTsQsARsCRXoVn7Npth1xas4MxAKGNhIMjbegzi2Ae0Gt3Fh0fxD1CwQemv72FNe0mAUZaQ3JUcDq0dVP+f0ruMSMs8x+I0NO4V/NX0b/ANjVYxOEZu5VRLNKgGN85gdKZogbJsFDwrhzX7gRdObNyVeZ/wACvV+GcGsLgSniJWRIC5InUtzzenlWTw3CWsHZEyTILvG7HSR5CYA/U1ZwWLS4xYE5MwB6mIkx1rHUeXGYt9d16fguEbRAYT+4bneNo8r/AGsmvYS1JAVARJ5DTn+NUMFxGx3igFSc+krGpOpBOk6zHOj/AO0vs5au2sN3dvKGvKtwpoTbKMdT1kDU0I47srwruosm6LjSqNNyDcA2OYRrI6b1RYGE4jcXss7v1Vzg3wWCDnPtaw63k6JnaPGFbsJnabZOYJqY8hMRI1pt7FN3SMtsktl8PPxbzT+ChyttSpZu7XM20EDbX1NbfbbgbJg8ObFtnuXCe8KnaFJKx6gj/rQxiuRl6roVeIFBokm9gIFjE9PSOsFR9nODfebV24PlMHxLppudYPp5Vc7RraFmwbSWgx1Yq5Zoy7MI0M0A8PXG4O73ttXtkZJHIhyAAy81OYDXYnqNDLAcOu3Gts5/hDMbh2AAGpmDzIHnPLcEYjABdZ6HFmpNaoYDbx5GRoDlIssCzihmNlxJJiR8JRvU7waKe0/ALeFFprQTxSphp0AkfsaVZvcCwGcEqS5Ua5mLCYCsABvrI0jeeQq1xPApfQMjzCxuTqPiMKAGbQAnbxHpR+FDHW28jr3os7P1am+u0YiBJ0zBym+nnOkmVSw3ZJnwhvm4Ni+SN1UmRmnfTasHDcXZLhWy7qwXUoSNJ20pnFO0FzDL93NxiJnu8xVSDqCQRIBkGI51SwHaJC3jtwSIJXfy5bDWkEsEafdbhxAa5zajwb2EZDQHIT1M2und29xrdzN4s06yTB/Ur+dDnbLhQW7nt/MuZlG/Qn8K3sZiEuL3cnMzbgEAENMyfSqeM4qMJ3iJLXnghmIMCI15mNwOeamMBBkfL87JPGvp1GEFwixLpmDe0WuQBqM9whXB2pRj/Yx9YZOnr+FR41MtxgDI01jqoPOpsL8DTElWBkxqSp/Q7U3G2DnLbAxEz0HlWuJC81iU2GwFwqHIyI0ZXcZVYTBykjxREQsmmO6KTE3D1Mqn0HiP1X0qa2pKgFiQCmUEkhc0EgA7ak6CqBXellquU+7iGYQToNlEBR7DT3o87LdhHi3fxYyI4LW0LBSY1Bafh01Aof4VwZl/iPaLaSqaexYH6xXqHZXjSKzHFHPCAL4QRPoeZ6+VLDmTBXV4bgaob45FxfDBnkRpM3i9h0QfwnhaNi+6e7NnvCwDSdASc2m+v1op4n2KU2719L3gQyFCmGywTmk6E7R6daHuJYxXxJNi2wBdmU7BRJ2I9QIFWE4lc7oo+gZtTmPM+sGdNxOtJxtj4hfsdea7fgvt4ToGoIm2ZudYMQDEc1k4iyL7/wATMgtiQJWTm3J300om7R4LAdxYFkeOAZ01GXXN/dMaVh38QiFhzAE6fh+vvQ3x7jHeHu7ZhV+cTJPlGoHnz9NwYXQWxY+nRBxVShRiqXXByB/loAeQA9Nyq9zKF8+lU2aalKr1NLItdJeJc+VDSqbKK5lFRCoa6RUuUUsoqKKvWlw24hJDaE+8/Wq2RaXdp1NU4SjZUwGVft4USDr030qQXGAAFqQDEyPr1pYfiXgFpjoDoY/P/NOuOVJEkjfQcv2KW5t10GV24ZAjoor2PdTlKgAkfTn+tEvCOMPZDKoBnXXkdp05afhWRg7mHctnBOnQUS8G4PZyq2QkkTJY6g6jQGqgjKxTXcRTDSKnxNJt78pQnx3hZvk3RHeH4uQb1/u861fs0xDILyFYAyksZnNLDLHoCaK8SlrDo13u1AtqW0GumwB89vevNMJxnu7j5nIV4VjPiDDUP6gk+xNXgc5pBWSrxNJ1QOa2PlHy7lG3Esqvnts1q8zZUiQolhOZHhWBHMAxzOk0H9rcR3hYXG/iBVzFFBU+Jiu5BE77ctqnt8da9dRLzqCw8N3IDyhZ8QGuomZHvS4hhLSFhfOJkrm0t2gNN8pLkc9p0pdOHVJOxjfr85TKr8NKGzsYyGse0IXwaKt1IYnxKPhAGpgz4j1qXiSygIn+YQAfc/nz5zXMU9kXwbHed0HUr3uXvIGWc2Tw7ztyiirs1grb3LltwHZ1KW1YKYdjaB3+bLngj+ojStTnYWl2yysGIhu67h/vX3QPdw7XLQK/xTKgrOktzGnxeY1J1q1wLH27hZUTIy+IrM+Ug9NvrXqF58S1pbfc2CGlWtlvk2McjpPh/KvL7fAmw3EcoaLTFbasdY71wirG5ysV16RWJ5BEannadoyXZ4Li6orBzjLRaSBIF7kxMDW5Xp3HOJX3w9lnshQSGzzMNlOUxHhnf8KHW480k94hGX4BkkHmcoXMDoTqY+unplrDoLS2iS4ChczQSYEToN683tdhr7Yrvbd6wbRMSZDEAEHwRqQCecUVajUzAmR69ysdPiuHMAjDBOU3BPPVO7JZGv52BZFWcoXQtPhkmAANSfbeiPG4Bnx9nEti7iIFynCxKGVIHiB0ljOq66a6CoOILh7CtbtoSPguamC0AFtJgQNYEUP2nDwuHxDqgBTuHAktHxBtdJPymIAirYXUwWouMe3iqgqCYi3IdPVRYm5cd7yF2NpLrKuYHcMYEncqANRVrgmMD2xbt3Ud1tlCpOhbxNqI3HqNzBr0O5wi0ywbaw2rKR1nnOhk70C43heGwNwugyqoUqpBzjNPhmJO2x6CetOpURTfi/EefJKdxYr8MaIsR8WU4rjbUzqNoWZgeJEtdS0UTJbZy7zAucxlIJzDQk7DUHXa5w3EAC/iQIypBljBIIIOXaYI1jUEelULHE79hj31q5ZRyXV8oYsoADIQDIdvi3nXbQxdwzF0ZjMuM7BvlhgQD8ubLlmOhoxWOK947tl1H1SRwTS0AGDqdt8u7XyheV4JLmLvNpcuGQzsBLEEnn9ddBV7tD2cvYZe9CEIrZWGZWI2hhGsRG/UedaOIvWLDf8Al0cvcLG6wbwhRJCKseIkAtP5kxUd3iFu/bIYNZtFcuYtOY6spJOwzR+MzJnEHAWha6tMAm+p/H0VmxxBksW1yB7zEFEjqwCseZ1OnX6mgu/cLuzuczOqkk7klFmj3s9wkG196u3ptoAVEjM5AMCdx8JiDusSOVXBrhcRjbl17KiyiroJhmMgtC76gjQbDaipuFJsEKVa54uADAFoOlsyd8/bmQxLEsJI15kmPwGlEA7P2Tq2MsIf6GN5iPdbRH0NGvGuHYO/b7qzZRbuTPbZVCyDqIO5B6xFeW8QYghp+IT09dOVaA8OIaFzzSIBMopXguGA1x9kaodLd87KP/1Df9a3cH9ndlbfe3MWMsgCEMgg6go3in2051idlOCMWS44YmAyIASQQB4o6iJH15UYXGtDDBPD3mf4QDmA8zEZfKlvq3IGg9V1uD/THODX1JgkWibXuduXzI0T+H9lMObV11xpyT4pCh5gbSZMiB+VVsZwvBMR/wCZuqQCPCgEjzk8qz7l1gtxBIRjB13ECT/j0qseGYdmYuGJCjmx012nnWcPmF2Twzw0gOJE2EhvPRhOd7LV4bewJhbdy6YXfIoEDSd6JP8A6esCyt/MWDa5SQNNSSTtpBJ6QaEbovYcqzWmWUJnQQBH9cCKFON8de4pRZFvuyx1OpYiRHJddufOrawF38fwe+Sy8Q53D0xNYk9P5chlAFryT52RDxfjXDrhZYcrOpUiCB0J1y/nWWMRw0bW392H+KDM1czUzCuBVqPquxPMqzNLNXKVa1iXZpTXKVRRdmlNcpVFF2aRNcpVFa6m9W8Licmjaqfw8x1GtU03HrUrLpH79fwqESjY8sMhF+Ft2rvd5E2EseUdPPX9a3nxeUjXc0PYa4mGsEJqYkk828/8VHY4ohQNcIZt42A9vL8waVlkjc41InIeaIO0t4nCvlEmVkAEkjOOQ9q8ya0wJDpDTJzCDrrsaK//ABQ3m7tRcadAqEKNecxOn0od4rhhbuFO7dGB1ztmBHIiFHrNGx2iW5mG5Kz7uGBG0dD6Uf8AB7n3nhj23MuuZFn5soBU+0x/1oBZWHzfQEmfSjjs3hXs21tt8RJfL0zQI9fD+NJ4kw0bzZaeDEuM5RdBfCuHi/cS0s53MCSAuxOp1MQDV3H2b9i5OVgyOCXIOTvNHUZh4duh5UQcF4O2G4jZcw1ss+RhyJtuchHJgD6GJHOCDtfxsLg71rEWpYrFsCAsk+A+xBMdFNONS4GiV4RAvYhadsYcSO98WVdEDB2AHhBuc0GhB3iJO8gXavtBeXEplP8AKe3cRSPCXTWSRqRqBHr72+H8Uti0l1roXw5SX8hAiOcDbyNZ2L7K4/GXu8sYO+1t4yM65AQAPFLkAAkGJOxrNSYTUE6LTWrRSibmF6ynae+3DbL2UNvE4lu7t5h/LGue5roQqqxWd4XTlWSPs4w7J3gxNw3gZ7yVLZhqDqubz3qXg2DxOGt2reIRWvWkIRSwZSNspKycwWBtzO803/xfCkG0UFsWwXzWSBDltZSMymSJVgdTFMqPMxsgbTEBzdUL3+IYxFvh2zPYcLcbcslwEhiNyDk3GogHqafwjja2sGlxLaJimvJcDuWYXAWe3l1PyF1YifEFknSpuA37LYrFd/bDLePhzbAIBEiQJ+JpgkHasO+3eYVQ5thbJItMpAzEsSWI5wQNQBPlFBTeHNxTeB6276IqjTTOAi3xR5d9mEf8bfi1y1OGxNy2TAZX7lSZB8YZllZg6A+lBPYbAW/vXeX2u3L4W53wZ5JZW3BAzEgANuTK6VpdlOPLiTbt3O871ibYEBkO/izM2ZVgarqI0ESa3eGdibK3mcXbj3BcLLcUlCDBkDIddzJ2PIDmLqpAv2dkTaTZkC+eUW3VPtxxkDDW8l4iHyqrwzllU+IMpIAiRBjcaDag7HWsVi8Vfg27Yzx3TPlCqpAXnroAS3OSfKjHtv2OLh7q3Ha4FgI7SsDU5RybT38poPxAtpdRrqB+8VbiSGbaAUZd9tonkKptZhk6yBle0n2QvaQQ3Q888vn0Vzs1wTvXu2LrI1t7TFHVyUDK6xBiCCD0OhkVrW1s4a5at281xCxXJm8Nu7IA1K5shUyFPNSfFAND+I4xcsvkw4VY+fJDZT5ZtGOv05VJ2f4qtu6O+HgLamT/AHGT1AkTO0TBirDXubihLqYQcIN9QsXi1w3bh10zDNz8C89ZPIfTlWr2Z4uLNx7bIjs6KUVwCueW1EgidQR7121hLX3kMAe7bvBb1HxAHLmidM3I6xlOvMP4la+o09wd6otxPw9D6/i+8prH4KeMDWPSPrbZet4rtFiksd87KEUZGAAksfgRRJ8UyCZ57cwKcEtW2FrvlZoEqpGuY6AiNx6f29KwDiHuJba7cYqmgli3iGm01fw2ICvh8ukMOevxLr+LVG05gGbbcgVdTiCw4mReIm+Zm41XrvBuJjB3P4tkzkygiJ5c9jtyrF4jiO/vG4qRnYkBZO/pvO/vWibhxJW2TLfL6x/gVb4TZu4a4rJaDsARGskHp0oGkuEHKdl3qNenesB+4RBEmLZZ6Id4WJxKobTMO8AK8ztIg/T2rc7TXkt3Lx+75FVRLGPDpObSRERz5VrYniIW0MQ9kI/eyzjYZSev9oAPv6V5J277VXsZcZVDLZzTEQXIAEmNl0kL7nXZzKYiAe/NJr8dgeHubFiIxZnEL20tmoe1fax8W+QEi0qMOfjOU+IzsJjTyBPliX4CmP8A8Nvn52+XvVTDjVtD8J09YH61fxiwtzQiLdpdesWz9RH4itAb8PfNcGrWNR0n8DkO+eZKya5Sps0BCXKvV2uV2mrOlXK7SqKLldpUqiiVKlSqKJtWDz+v1/8AmoKmB/L8v/irVyurjmiDqPOuYJv4qQIGYabjU6/hUDjWpcCP4if8h+dURZEDdehYW9b80PkYHtVXtJw8X0zLBuKNNR4h09en+6xb+FuTIn1E1PgLNxYIzAD2FKa4qywaFD/CcOWvWgCDJzbj4VOuk6Egc+teg3sITF1dDny68/DOg25fnvXn/AQRiFnofoQRXo/D8egt+MgBXBlzpqCBr1kfjQVm4neX1lPoVMDCpsdxixhVYNrddgVQdBlkknYb8v1NAXa7ihxMKqlTnmGIA2I3Om55wK27Fu3ext9r2VghXLqSCpURtuNZjqaIr2GtXUUWcNa7s6EsFUDqdtB6SfSoLAbhQkuJvY/hWPs/4LhcDbVw9u7iXHjuqc2XnkTQkAczoTuY0APsFxQXFkHcwDtMyN/bevGbfDntXjYtsVRjoxaBkJkhj0HvMDnufffLeGtZWyZ12QEZidgdNddyY50wVTgLnBFW4Zge1rHTIB5jkYtn91H2w4m1lwFA0aRmnaQ0j11B9aC8S74xyqHu7SkZwWZtByneACYG1en3sLZxFtDetrdKr8UHePFtqBM/Sg3tG9jCk2rMLmEFlHwydTB3IUj3HnWetSfctKdw9dsBpBn0t626Kp2I7PYbEp3mIl2fM6Wy8ZbRPgJVWzEsIMkRsKq9tMPbt2mVD3lkgomYq7WbqjMFDglgrKpEE6H1ouucQNrDWRaDugUKGtC18qwNLrLoY5HSKpdqLy3rdu3ezAvBFsauWA0XwjU5io061HHEETGHxBObj0vP3M6oD7McNa7bASFCOCbgMMpYgpHP4hGlGuF4rftuqpbVyxAJdjMn4tI1I3862Ox/2fLYi7iIdxBVJ8CxsW5O4030HKd6x+2fBbvf5rbw0FsqkA6xJBOxErqOXrVGg7+XeSs8XTcRTG0SIvlrrlnadJzMh4xfe6RctoIaIVjPkCCI1HnzFeV8Q4RjMQ7XBaxFwyco7t2AHQELERHIV6N2Q4QwxKG85JiSJEqCSFZyp+Zs0EmdD7ev2wVHxFh1O/uadRpYXOdGax8RVkNaNJXy/wAXwf3YoGZoe0jg3FyNqNVyzplMr/1qxieOYY2BbDzAGvdmJG+seeuvy/X0D7XsBauYjC3Gy+LNbZo8Q0DA+ex32k9aErXZWwyCcTe0MsRa0KmIAJ3OvU+lG6sWnDH29FVLh8bMU/fzyWPwbjFq3c8WVrbDYicrAHKwBiCAY3G/lVXtMVm06qFBBV2GWGMDKSqAKDOfQdN+hdd+yy9iLebBvaAzEnvWdWaAuWAqlRrmoSu9mb9tLwxJ7sKIV8wa2XUkfzFJXqsb/SlwLVMp0RSb0c+aoWb2YC2SAupERObTSen+6jchXU55YONtiJB/D9Kq2+HXDoFkdfl+tavBez5uXlVjoPExHQaR7kjX1prgGtJNljYS97QDJ0Ga9T7C4gtisPtEkyPJGJr1C1iAg7y5CoFJzk7DTfoda8r7JcWwmDxKi4WCFGVWgsFbQ6hROoBEjr6wOdv+2t7H3Mtom3hrZ8CTDMeTvHPouw9daVwzCGStvE1Gl5A6d/Ner8YxWHxS5M0JMgdT1NC+P7IIdUcV5jheMYhNMwI9TNbmA7TvzeDWmCsSuY/svct5jlnw7j1FYvGOHx3k9bagdAoPLpp+NE+H7TMRBOlcuXbdz4gPpQ3iFYK86fA1WfCmvQsRwe22xrNv9n+hoYRYkLVyp8tcyUxAoaVSd3XClRRNrlOyGu93UVplKpQlOC1FShp4epIruWooq5FPsEhlboQfoamy0glWrRpZuTpsatpbG5Mx5UCniV4HS4fwP5int2gvgRmBBHNR+lBhUlUzijbvBxyAkdRzH40XrxvD3MMyj4m8OT5gf6p6DeaBbrEsSd+dT4MnNlWNf8f6q3CckbCBZ2SJuGYDKzsAWHw5SJDoPiBAGpBIE+fnRHbxT3CoTwoNGRCg22GUgc512GxUzpj8JN2zaLFcyR/UREkkwCdN9+lZl1O9uFkIV2Ow0BPUmd/3NZnvErqM4cluIAW5zpPlAzW7xtbgezbskFlBzajUmPDtBmNtOW1ELWH761euCbgUB1USJBhfMwSPpWT2V4eyE3rq6J8M/wBciI/fPyon4YwZnB/o9/P9KjA4gTvMJFWq3QZTfqMuwtDg6WxmuOAzc9NAIiIEgtqZ9YHmRYHC2ghVbSLoRAVRv6UKJiEt5UWczHQE7zH+ponsvAH5+tbQIXOeZQRxe9fw6L3BSZIdSMy7nxDaCKweAcUZeINddmuXMqqF8mYBiJ00zrI6D1r0nG8CW82YOVzfEI0199Ksjs7hVVf4Kynw3PnknU5xrrv9OlZm034y7r6ra7jAZcbkgzbcEfVauHxi3F032ZTuD0IoK+1HgV6/h0NgTcRxMGDlgqTPSCJ9KLsaiKjXABntqTI30BMGNYPQ1UHEAygqdG5U6JEFYmOwODhpuvJOHdlMW+QK57smbgkiWjWfEDPKdYB9j7DiMQxWVjUAgmdj6VQQgSFAEE7dSTrpWP2g4+LFlrT7wdzEqx8Ce5bLHT1q20msy7hMq8Q+tAdkMvOJy6BA/bDiC4hyLQNxwQUcE5VA1cjrOg9qzcBxC2RBky0rbzvpcO/8OMo1JOaSOdehdj+H2nwsgS1xS7tpm7wPEeQBMgedYlvsFlxKuCCjkanZCRLGBqdzA23HKaRUY6JF06jUYHFpsOfeaMuxtplssxZiCVUAk5YUmSoOgnMZjfLWe3ClFh/4IWy7urWnJJIZiMoBmRr10jyoksBbaBB8K5cv0H5kH3ah5uNPcum2wAVQQBkYmQI3Ijbp/uqrNYyk1ruypwxfUque3znZeXcZ4OcKzWiJWc1o/wBgCwJ/qGx8xPMUMYjD3HuKbRKsCZYGIBiT6V7D2o4WcRbBQgvb2XmQRBAJOk6H/rXl9m2O8PrB9Jg6eRH4UdCqKjIOYz37KwcTRNCqS3I3B06eXe6uXbLNbhGOcbMTqSWEmfMSPelgODAJ4w2bnJnWNdRuJmrlkjMBMDYH8jWsUoqjsMQm8CBUDsW/v+QVhNwZajPCBW/kppt0vxiuh4DNliW8ARtVq0hFaPdil3IqvGU/p2qK1PWrK3DUfd04TVeKq/p2oIK0stSxSK0+VjhQxXIqXLXCKtVCiiuxUmWu5akqQmRSC1Jlp0VFcKILTgtPiuSOtVKkLkUgKdFdipKuFTv7moQssB1IH41PiPiNcw3xj98jV6INU7iCZXDAAzrBEiR5Het7hvCbTxd2JAIQaKpI1PX2msrHrKemtWMDjT3ahZEaH6/4oCbJrRLoRBiruW2wM5QI/TasG3iIIyqdI19IpYzGsVaNtgKhthfmJPlWVwXa4HI816AmL77DKyqw1gAxrEzsdpmtPgoORnYanQeg3/H8qpcIuJ3VvJqoWARsTz95mtQ31VdTAA19BWxrciVxKrhLmtFpPXzVPgL58RcuNBysyr5AMQB66Gi9bgiDsdKB+zmMRgxRgQdd/WffWtk4tpAB86a2IS6oOOETWGI3IMmZj6foPaqvE+IMItg+sf62GtUbHExMEEctY2Ak/oPevNu3PHHN17isQACsA7lpAEbEwT9DS6ptG6Zw9MyXHICV7TwvDr3EiW7wZmknUGYiNhHTrXlvZziN03LuGBJFtnAOuwLKAejabHoaJuwnba1fsIjHLdtIO9Q8uUjqug184rCs8YZ7txnJ7zXMVCnxDlDEQANjyFZ6zzTaA0XyTqFLxHlzuvW+nfuiTC8at2sKL7EMSBkA+diNAD0HM8hXlPbfi1zNba6D/EJuHq0GI8gOnmK9D4dhUxjMWuqGtQSkrmCPOuhIElTr5V559sX/ANxYULlVbRCjnAbf1Jmn03FwB72WaoIc4Znsoj7P9sksXwqtnt3nQ+IlcpgKSSQZzLGmglQZFF9zjbqQjW1mbag5/hDZ0k5lALd4rAKYkISDMKfL+J8PV+HJfQQyWwZG8ASD6g/vSt7sjxXDXkR7lrvHOQNkkOLluGIJLLKSXOXUGRvS6NYuz3R16IabbI2s9pbD2lcOQrgZS6skjMhUgsADPe2xvu0bggDXaN7lu7be0PEx/iDKzgQQGYJmAPxDTSfKn4uwto2yLOIGW5nY3FWG/h5MoKGTEI4kEkqCTMEUeK8ftW2t37lq9FsmCpCh7jAAKHnoJMAwBrFaKrQ9sFKpPdSdiaudoeMYqwgZXssxMoRbYJctj4iDm0ZZAKHUTvQ/wjCd9h3uPBvZmZcs7STlI56k677a1V4z9od7EBreWwlo/ItoEjfXvG1LCT4gF3NZnCuLtZaVjkwH6isL2uBimtjXU3N/e75iFuYBxP4it80HYLHSZOmpOnmZous3ZVfStHED4fNc79POGqQdvqPyuMKaVp5byrhNYrrsYgmiukUyulqq6vEE8CuGo83pXS1DCLEEH0opUq6K5qVciuzXKiiUUopV2oolFKlNKoou0gKVcq1F2u02lUUVS+fEafghuagc7+tWcINPeogCskyCOulVuHZpI5DU+1TTU2DWCzHmdPpBHlMn6VRyTWXcEy+JkAGRqdD++c058MYE8xOnTrttV1Lc8tZA28tJ06aefOrtuxB+LQT8Om5grOpaTtrpH1VgldFlYU7eizOD8Uey65WZlzCUBEHy12PmI9a2uKcfLFlVT8MtJJ00B2Gmk61GuFQ5S5DkEAZhqG99iZH0rGvJlxBzbHQdJGo1n1/KrkgRKAllSqCR3Pkr3CcKCVYqSJE5SQZ9Fb4ogQIOo577XDheyrFy4kORDEEbCFGYE59W0B5VFw7AmZ8Mk5pDMQIbMwPQwV1P9A99OzdXKFIh5BDoPAckkhSzHXUgsPEc20zQAc4Wp1QXESecEAdJ+dswprOCYMWN247wLaodvGwOaFgagZRJ3J6VidouFI1i53S57itmXIxJhS2bNoZ0BgacomTO1bxIBBG+hZmZdwRJkFhBVz4subcSdVpWMxCKeeRFBWVJI0IFx4LMEGpAX/iYqi8ggj7om0WvaQ/IxfLlp8+hJMyF5LguLXbF0X7TQ40PRlO6sOanYit7jPal7ndMlpLRuaz8RhCywSwiCwnaR7mpu3PZl7bG+qEKwm4uuZT/AF/CsqecDQgzzgRuZ2RNCVQaEHYMxnTkZnWnn44I3v8AI/WFyHNNFzmk6WIPMGfl6og4Hxy9h8UuKDF2+G4rH+ZbJGZJ5EQCBsCAdqf9pvGrWMxi3LDEotlRqCCDLMwg8xmHlpWQLkieo19ef1396fhOE96NAS7zG+nIaDcU/CNFkkzdGfBQL3CEUtlm4thj0W5dVJ+jTVXtLhsNw49zZYNfEB1RjCwN3eJNyZOUDSeWgOlcwNmxwy7hzeDXAgvEA6hs4KSOQLQsb151fcaySTuevqf90ihGF1tVo4jEC2dkWdm/tCaw0Ym215P7XykD3Bz+jECsftz2nOPxOdAy2EAW1bMAKI8RyqSoYmZjkFHKht2BI0qW5h8oQzIcZp5bkEe0U3EckjDqn4awsS2tbvCcMlxigkeE6gTGon6xWCugon7L8PJJukkCMqxz6+2340upZsjPRG0Bxg5arTwXAlUznJHQgfmK2rNnKsCffeq1mxB+In8qslqRieRBTm06bXYmhSiuGKYH0puaaWnApxUVxgKizxTs3lQkKwU6aaT61EXNcFyhhXKGK5SpV0FiXaVKlVKJUqVKoolSpUqtRKaVKlUUSp1cpVFFnmrVg+EfvnXKVWhCtWNTHnv+/Q/WrEmY/wB6D9/iaVKhThorUgAjXMq7+snSfMfjT8OreFQdSYEzAJbrvz330pUqFybTJLT1T7Vw+GPmmNdivnzWZ089ZptjCjE3FVmIUEysDULt4t5pUqpuYTqgGFx2H1j6LdtcQcHIpAymCYj58p0B6lSIK7EV29iHDHxRkkEKWAJUgaayo8YIg9d6VKhxGM05lNkzA+XMaeaabhUxPiWHU6kCZiATEmSSSDBJjfSwbgRRdCKWZSyAgaaXGBZzJJg7ACSq66TSpUA15CfktTiYaP8AIgHmDjn/AMj1jMyLdq8Pbt2XeMzkBGMZYZmgkZTqAQIBEEMRAgUMYXTD3P8At/7ZpUqfw+S5X6l/y+QVO03hHpRL2YxOXI+sgPEdVVj7DelSpx/ieix0/wCbeoWfxjFObuI18Ny5DbzFpiF205D6CskjSOVKlVAQFTiS49T7ys994FX7rDJbSNVBYnzYzA8oy+80qVCouWxRj2X/AJA8mYfjXaVVU/iiZmtoGuB6VKs6cnE10mPSlSoYRLhamd75UqVDCKVxhTPypUqEogv/2Q=="
                  title="Contemplative Reptile"
                />
                <CardContent>
                <Typography variant="subtitle1" component="p">
                     OUR VISION
                    </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                   Being purpose-driven is core to how we run our business
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
              <Button size="small" color="secondary">
          Learn More
        </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://prod-c2i.s3.amazonaws.com/articles/15971103275f31f837498a8.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                <Typography variant="subtitle1" component="p">
                     OUR PROMISE TO YOU
                    </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                   We want to make banking invisible for you
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
              <Button size="small" color="secondary">
          Learn More
        </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.dbs.com/iwov-resources/images/about/our-heritage/banktothefuture.png"
                  title="Contemplative Reptile"
                />
                <CardContent>
                <Typography variant="subtitle1" component="p">
                     OUR HERITAGE
                    </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Staying true to our sense of purpose over the past 50 years
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
              <Button size="small" color="secondary">
          Learn More
        </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.dbs.com/iwov-resources/images/newsroom/SAfestbank.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                <Typography variant="subtitle1" component="p">
                     OUR AWARDS AND ACCOLODATES
                    </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                   Asias safest bank and World safest bank
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
              <Button size="small" color="secondary">
          Learn More
        </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
     
    </div>
  );
}

export default AboutUs;