Drop your downloadable files in this folder using EXACTLY these filenames,
so the links already written into the pages resolve without any edits:

  resume.pdf          -> linked from resume.html ("Download PDF")
  letter-01.pdf       -> linked from references.html (first letter)
  letter-02.pdf       -> linked from references.html (second letter)

Anything else you add here: link to it with a relative path, e.g.
  <a href="assets/docs/my-certificate.pdf">Certificate</a>

Until the real files exist, those links will 404. That is expected for the
scaffold — it is not a broken build.
