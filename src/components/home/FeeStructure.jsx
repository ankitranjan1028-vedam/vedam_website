import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { homeScreenData } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import CallMadeIcon from "@mui/icons-material/CallMade";

const SingleTableCell = ({
  text,
  isHead = false,
  isFirst = false,
  isFirstColumn = false,
  isLastColumn = false,
  isFirstRow = false,
  isLastRow = false
}) => {
  return (
    <TableCell
      align="center"
      sx={{
        whiteSpace: "nowrap",
        border: "1px solid rgba(186, 107, 255, 0.3)",
        paddingY: "16px",
        fontWeight: "400",
        color: isHead ? "white" : "rgba(30, 30, 30, 1)",
        // Rounded corners only for corner cells
        borderTopLeftRadius: (isFirstRow && isFirstColumn) ? "12px" : "0px",
        borderTopRightRadius: (isFirstRow && isLastColumn) ? "12px" : "0px",
        borderBottomLeftRadius: (isLastRow && isFirstColumn) ? "12px" : "0px",
        borderBottomRightRadius: (isLastRow && isLastColumn) ? "12px" : "0px",
      }}
    >
      {isFirst || isHead ? text : "₹" + text}
    </TableCell>
  );
};

const SingleCountText = ({ count, text, isHref }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(186, 107, 255, 1)",
          width: 28,
          height: 28,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "#F9F9F9",
            fontSize: "14px",
            fontFamily: "Inter",
          }}
        >
          {count}
        </Typography>
      </Box>
      <Box sx={{ width: "80%" }}>
        <Typography
          variant="subtitle2"
          sx={{
            color: "rgba(30, 30, 30, 1)",
            fontSize: "12px",
            fontFamily: "Inter",
            lineHeight: "150%",
          }}
        >
          {text}
          {isHref && (
            <Link
              style={{
                color: "#FFA41A",
                fontSize: "12px",
                fontFamily: "Inter",
                lineHeight: "150%",
                marginLeft: "4px",
              }}
              href="https://drive.google.com/file/d/1zJzM9ZOPsJzP5bhZsCRB5xWlho3iAGwt/view?usp=sharing"
              target="_blank"
            >
              <CallMadeIcon sx={{ height: "100%", width: "12px" }} /> here
            </Link>
          )}
          .
        </Typography>
      </Box>
    </Box>
  );
};

export const FeeStructure = () => {
  return (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 1)",
        borderRadius: "30px",
        padding: { xs: "20px 10px", md: "40px" },
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          marginBottom: { xs: "1rem", md: "2rem" },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter",
            fontWeight: { xs: "400", md: "700" },
            marginTop: { xs: "8px", md: 0 },
          }}
        >
          {homeScreenData.FeeStructure.headerLeftTitle}
        </Typography>
        <Box
          sx={{
            border: "1px solid rgba(108, 16, 188, 1)",
            paddingX: { xs: "10px", md: "20px" },
            paddingY: { xs: "8px", md: "10px" },
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderRadius: "12px",
          }}
        >
          <Image
            width={20}
            height={20}
            src="/img/location2.webp"
            alt="location"
          />
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "12px", md: "1rem" },
              color: "rgba(108, 16, 188, 1)",
              whiteSpace: "nowrap",
            }}
          >
            {homeScreenData.FeeStructure.headerRightLocation}
          </Typography>
        </Box>
      </Box>

      {/* Content Section */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* Main Fee Table */}
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              overflowX: { xs: "auto", md: "visible" },
              WebkitOverflowScrolling: "touch",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            <Table
              sx={{
                minWidth: "100%",
                borderRadius: "12px",
                border: "1px solid red",
                padding: "10px",
                borderCollapse: "separate",
                borderSpacing: 0,
                overflow: "hidden",
              }}
            >
              <TableHead>
                <TableRow sx={{ background: "rgba(146, 62, 218, 1)" }}>
                  <SingleTableCell text="Year" isHead isFirstColumn isFirstRow />
                  <SingleTableCell text="Semester" isHead isFirstRow />
                  <SingleTableCell text="ADYPU" isHead isFirstRow />
                  <SingleTableCell text="Vedam" isHead isFirstRow />
                  <SingleTableCell text="Total" isHead isLastColumn isFirstRow />
                </TableRow>
              </TableHead>
              <TableBody>
                {homeScreenData.FeeStructure.leftSideYearTable
                  .filter(row => row.id !== "8")
                  .map((row, idx, filteredArray) => {
                    const isLastRow = idx === filteredArray.length - 1;
                    return (
                      <TableRow key={row.id}>
                        <SingleTableCell
                          isFirst={true}
                          text={row.year1}
                          isFirstColumn
                          isLastRow={isLastRow}
                        />
                        <SingleTableCell
                          isFirst={true}
                          text={row.semester}
                          isLastRow={isLastRow}
                        />
                        <SingleTableCell
                          text={row.amount1}
                          isLastRow={isLastRow}
                        />
                        <SingleTableCell
                          text={row.amount2}
                          isLastRow={isLastRow}
                        />
                        <SingleTableCell
                          text={row.total}
                          isFirst={true}
                          isLastColumn
                          isLastRow={isLastRow}
                        />
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </Box>

          {/* Total Price */}
          <Box
            sx={{
              width: "100%",
              height: "60px",
              marginTop: "20px",
              borderRadius: "12px",
              background: "linear-gradient(90deg, #FF7829 0%, #7B2CBF 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingX: "40px",
            }}
          >
            <Box>
              {homeScreenData.FeeStructure.leftSideYearTable
                .filter(item => item.id === "8")
                .map((item) => (
                  <Typography
                    key={item.year1}
                    variant="h6"
                    sx={{
                      color: "white",
                      fontFamily: "Inter",
                      fontSize: "24px",
                    }}
                  >
                    {item.year1}
                  </Typography>
                ))}
            </Box>
            <Box>
              {homeScreenData.FeeStructure.leftSideYearTable
                .filter(item => item.id === "8")
                .map((item) => (
                  <Typography
                    key={item.total}
                    variant="h6"
                    sx={{
                      color: "white",
                      fontFamily: "Inter",
                      fontSize: "24px",
                    }}
                  >
                    {item.total}
                  </Typography>
                ))}
            </Box>
          </Box>

          {/* Additional Information */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(186, 107, 255, 0.08)",
              borderRadius: "12px",
              padding: "3rem",
              marginTop: "20px",
            }}
          >
            {homeScreenData.FeeStructure.rightSideText.map((item) => (
              <SingleCountText
                key={item.id}
                count={item.id}
                text={item.text}
                isHref={item.id === 4}
              />
            ))}
          </Box>
        </Box>

        {/* Hostel Fees Section */}


        <Box sx={{ width: "100%" }}>
          {/* Desktop Hostel Table */}

          <Box sx={{ padding: "10px", border: "1px solid red", borderRadius: "12px" }}

          >
            <Box sx={{
              display: { xs: "none", md: "block" },
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(186, 107, 255, 0.3)",
            }}>

              <Table
                sx={{
                  width: "100%",
                  backgroundColor: "rgba(186, 107, 255, 0.08)",
                  borderCollapse: "separate",
                  borderSpacing: 0,
                  //  border: "1px solid red",
                  // padding: "10px",
                  // // overflow:"hidden",
                  borderRadius: "12px"
                }}
              >
                <TableHead>
                  <TableRow sx={{ background: "rgba(146, 62, 218, 1)" }}>
                    <TableCell sx={{
                      color: "white",
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                      borderBottom: "1px solid rgba(186, 107, 255, 0.3)"
                    }}>
                      Standard Room
                    </TableCell>
                    <TableCell sx={{
                      color: "white",
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                      borderBottom: "1px solid rgba(186, 107, 255, 0.3)"
                    }}>
                      Premium Room
                    </TableCell>
                    <TableCell sx={{
                      color: "white",
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                      borderBottom: "1px solid rgba(186, 107, 255, 0.3)"
                    }}>
                      Premium Plus Room
                    </TableCell>
                    <TableCell sx={{
                      color: "white",
                      textAlign: "center",
                      borderBottom: "1px solid rgba(186, 107, 255, 0.3)"
                    }}>
                      Supreme Room (Only Boys)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)"
                    }}>
                      ₹90,000/-*
                    </TableCell>
                    <TableCell sx={{
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)"
                    }}>
                      ₹1,10,000/-*
                    </TableCell>
                    <TableCell sx={{
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)"
                    }}>
                      ₹1,40,000/-*
                    </TableCell>
                    <TableCell sx={{
                      textAlign: "center"
                    }}>
                      ₹1,80,000/-*
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Box>


          {/* Mobile Hostel Table */}
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(186, 107, 255, 0.3)",
            }}
          >
            <Table
              sx={{
                width: "100%",
                backgroundColor: "rgba(186, 107, 255, 0.08)",
                borderCollapse: "separate",
                borderSpacing: 0,
              }}
            >
              <TableBody>
                <TableRow>
                  <TableCell sx={{
                    color: "rgba(108, 16, 188, 1)",
                    borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                    borderBottom: "1px solid rgba(186, 107, 255, 0.3)"
                  }}>
                    Standard Room
                  </TableCell>
                  <TableCell sx={{
                    borderBottom: "1px solid rgba(186, 107, 255, 0.3)"
                  }}>
                    ₹90,000/-*
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{
                    color: "rgba(108, 16, 188, 1)",
                    borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                    borderBottom: "1px solid rgba(186, 107, 255, 0.3)"
                  }}>
                    Premium Room
                  </TableCell>
                  <TableCell sx={{
                    borderBottom: "1px solid rgba(186, 107, 255, 0.3)"
                  }}>
                    ₹1,10,000/-*
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{
                    color: "rgba(108, 16, 188, 1)",
                    borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                    borderBottom: "1px solid rgba(186, 107, 255, 0.3)"
                  }}>
                    Premium Plus Room
                  </TableCell>
                  <TableCell sx={{
                    borderBottom: "1px solid rgba(186, 107, 255, 0.3)"
                  }}>
                    ₹1,40,000/-*
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{
                    color: "rgba(108, 16, 188, 1)",
                    borderRight: "1px solid rgba(186, 107, 255, 0.3)"
                  }}>
                    Supreme Room (Only Boys)
                  </TableCell>
                  <TableCell>
                    ₹1,80,000/-*
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>




          {/* Hostel Fee Notes */}


          <Box sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            // gap: "1rem",
            backgroundColor: "rgba(186, 107, 255, 0.08)",
            borderRadius: "12px",
            padding: "1rem",
            marginTop: "20px"
          }}>
            <Box sx={{
              backgroundColor: "rgba(186, 107, 255, 0.2)",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              width: "fit-content"
            }}>
              <Typography sx={{
                color: "#7C3AED",
                fontWeight: 600,
                fontSize: "14px"
              }}>
                Note
              </Typography>
            </Box>

            <Typography
              variant="subtitle1"
              sx={{
                mt: 1,
                fontSize: { xs: 12, sm: 14 },
                color: "#374151",
                lineHeight: 1.6
              }}
            >
              *The hostel fees mentioned above is per student per year.
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                mt: 1,
                fontSize: { xs: 12, sm: 14 },
                color: "#374151",
                lineHeight: 1.6
              }}
            >
              **Additional mess charge of ₹5,500 / month applicable.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
