const papers = {
    CAP122M: {
      title: "Computer Fundamentals",
      code: "CAP122M",
      type: "Major",
    },
    CAP122N: {
      title: "Internet Basics And Multimedia Computing",
      code: "CAP122N",
      type: "Minor",
    },
    BAD022I: {
      title: "Fundamentals Of Management Studies",
      code: "BAD022I",
      type: "MD",
    },
    WDP1225: {
      title: "Internet Basics And HTML",
      code: "WDP122S",
      type: "SEC",
    },
    CNS022A: {
      title: "Communication Skills",
      code: "CNS022A",
      type: "AEC",
    },
    UIN022: {
      title: "Understanding India",
      code: "UIN022",
      type: "VAC",
    },
  };
  
  const results = {
    220450: {
        student: {
        name: "Khalid Javid Ahanger",
        rollNumber: "220450",
        examRollNumber: "2222110208",
        formNumber: "2200570",
        papers: papers,
      },
      marks: {
        CAP122M: {
          theory: 64,
          practical: 26,
          total: 90,
          grade: "Pass",
        },
        CAP122N: {
          theory: 65,
          practical:25,
          total: 90,
          grade: "Pass",
        },
        BAD022I: {
          theory: 32,
          practical: 20,
          total: 52,
          grade: "Pass",
        },
        WDP1225: {
          theory: 42,
          practical: 18,
          total: 60,
          grade: "Pass",
        },
        CNS022A: {
          theory: 30,
          practical: 16,
          total: 46,
          grade: "Pass",
        },
        UIN022: {
          theory: 34,
          practical: null,
          total: 34,
          grade: "Pass",
        },
      },
      totalMarksObtained: 363,
      maximumMarks: 600,
      percentage: 62.5,
      result: "Pass",
    },
    220464: {
      student: {
        name: "Yasir Hamid Mir",
        rollNumber: "220464",
        examRollNumber: "2222110203",
        formNumber: "22000415",
        papers: papers,
      },
      marks: {
        CAP122M: {
          theory: 49,
          practical: 30,
          total: 79,
          grade: "Pass",
        },
        CAP122N: {
          theory: 71,
          practical: 20,
          total: 91,
          grade: "Pass",
        },
        BAD022I: {
          theory: 35,
          practical: 21,
          total: 56,
          grade: "Pass",
        },
        WDP1225: {
          theory: 36,
          practical: 41,
          total: 77,
          grade: "Pass",
        },
        CNS022A: {
          theory: 31,
          practical: 17,
          total: 48,
          grade: "Pass",
        },
        UIN022: {
          theory: 20,
          practical: null,
          total: 20,
          grade: "Pass",
        },
      },
      totalMarksObtained: 371,
      maximumMarks: 600,
      percentage: 61.83,
      result: "Pass",
    },
    220454: {
      student: {
        name: "Rouf Bilal Shah",
        rollNumber: "220454",
        examRollNumber: "2222110187",
        formNumber: "2200147",
        papers: papers,
      },
      marks: {
        CAP122M: {
          theory: 66,
          practical: 39,
          total: 105,
          grade: "Pass",
        },
        CAP122N: {
          theory: 74,
          practical: 39,
          total: 113,
          grade: "Pass",
        },
        BAD022I: {
          theory: 36,
          practical: 20,
          total: 56,
          grade: "Pass",
        },
        WDP1225: {
          theory: 40,
          practical: 42,
          total: 82,
          grade: "Pass",
        },
        CNS022A: {
          theory: 28,
          practical: 17,
          total: 45,
          grade: "Pass",
        },
        UIN022: {
          theory: 26,
          practical: null,
          total: 26,
          grade: "Pass",
        },
      },
      totalMarksObtained: 427,
      maximumMarks: 600,
      percentage: 71.17,
      result: "Pass",
    },
  };
  
  const rollNumberField = document.querySelector("#rollNumberField");
  const searchBtn = document.querySelector("#searchBtn");
  const comment = document.querySelector("#comment");
  const resultView = document.querySelector(".result");
  
  updateResults(results["220450"]);
  
  rollNumberField.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
      handleQuery();
    }
  });
  
  searchBtn.addEventListener("click", handleQuery);
  
  function handleQuery() {
    const query = rollNumberField.value;
    if (!isValidQuery(query)) {
      comment.textContent = "Invalid Roll Number!";
      return;
    }
    updateResults(results[query]);
  }
  
  function isValidQuery(query) {
    return results[query] != undefined;
  }
  
  function updateResults(result) {
    comment.textContent = result.student.rollNumber;
    resultView.innerHTML = generateHTML(result);
  }
  
  function generateHTML(result) {
    const student = result["student"];
  
    let html = `
    <table id="table-one">
      <thead>
        <tr>
          <th colspan="6">SEMESTER END RESULT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Name</th>
          <td>${student.name.toUpperCase()}</td>
          <th scope="row">Batch</th>
          <td>2022</td>
          <th scope="row">Form No</th>
          <td>${student.formNumber}</td>
        </tr>
        <tr>
          <th scope="row">Exam. Roll No</th>
          <td>${student.examRollNumber}</td>
          <th scope="row">Semester</th>
          <td>1</td>
          <th scope="row">Session</th>
          <td>Dec 2022</td>
        </tr>
      </tbody>
    </table>
  
    <table id="table-two">
      <thead>
        <tr>
          <th scope="col">Course Type</th>
          <th scope="col">Paper Code</th>
          <th scope="col">Paper Title</th>
          <th scope="col">Theory</th>
          <th scope="col">Tutorial / Practical</th>
          <th scope="col">Total Marks Obtained</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody>
    `;
  
    Object.keys(papers).forEach((paperCode) => {
      const marks = result.marks[paperCode];
      const paper = papers[paperCode];
      html += `
        <tr>
          <td>${paper.type}</td>
          <td>${paper.code}</td>
          <td>${paper.title.toUpperCase()}</td>
          <td>${marks.theory}</td>
          <td>${marks.practical}</td>
          <td><b> ${marks.total} </b></td>
          <td>${marks.grade}</td>
        </tr>
      `;
    });
  
    html += `
        <tr>
          <td colspan="3">
            <b>TOTAL MARKS / RESULT</b>
          </td>
          <td colspan="3"><b> ${result.totalMarksObtained} / ${result.maximumMarks}</b> (${result.percentage}%)</td>
          <td colspan="1">
            <b> ${result.result} </b>
          </td>
        </tr>
      </tbody>
    </table>
    `;
    return html;
  }
  