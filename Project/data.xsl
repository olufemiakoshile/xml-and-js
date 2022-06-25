<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/root">
  <html>
  <body>
    <h2>Universities</h2>
    <table border="1">
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Courses</th>
        <th>Students</th>
        <th>Faculty</th>
      </tr>
     <xsl:for-each select="row">
      <tr>
        <td><xsl:value-of select="name"/></td>
        <td>
          <xsl:for-each select="address">
            <xsl:value-of select="address"/>, 
            <xsl:value-of select="city"/>, 
            <xsl:value-of select="region"/>, 
            <xsl:value-of select="country"/>,
            <xsl:value-of select="zipcode"/>
          </xsl:for-each>
        </td>
        <td >
            <table border="1">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>description</th>
              </tr>

              <xsl:for-each select="courses">
                <tr>
                  <td><xsl:value-of select="id"/></td>
                  <td><xsl:value-of select="title"/></td>
                  <td><xsl:value-of select="description"/></td>
                </tr>
              </xsl:for-each>
            </table>
            
            <hr/>
        </td>
        <td style="font-size:10pt">
          <table border="1">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Birthday</th>
              <th>Email</th>
            </tr>

            <xsl:for-each select="students">
              <tr>
                <td><xsl:value-of select="id"/></td>
                <td>
                    <xsl:value-of select="lastName"/>, 
                    <xsl:value-of select="firstName"/>
                </td>
                <td><xsl:value-of select="dob"/></td>
                <td><xsl:value-of select="email"/></td>
              </tr>
            </xsl:for-each>
          </table>
        </td>
        <td>
          <table border="1">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>

            <xsl:for-each select="faculty">
              <tr>
                <td><xsl:value-of select="id"/></td>
                <td>
                    <xsl:value-of select="lastName"/>, 
                    <xsl:value-of select="firstName"/>
                </td>
                <td><xsl:value-of select="email"/></td>
                <td><xsl:value-of select="phoneNumber"/></td>
              </tr>
            </xsl:for-each>
          </table>
        </td>
      </tr>
    </xsl:for-each>
    </table>
    
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>