<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
    <xsl:template match="/">
        <html>
            <body>
                <h1>Catalog</h1>
                <ol>
                    <xsl:for-each select="catalog/product/catalog_item">
                        <li>
                            <article>
                                Item Number: <xsl:value-of select="item_number"/><br/>
                                Price: <xsl:value-of select="price"/><br/>
                                Size: <br/>
                                <ul>
                                    <xsl:for-each select="size">
                                        <li>
                                            <xsl:value-of select="@description"/><br/>
                                                &#42;Color:<br/>
                                                <ul>
                                                    <xsl:for-each select="color_swatch">
                                                        <li>
                                                            <xsl:value-of select="text()"/>
                                                        </li>
                                                    </xsl:for-each>
                                                </ul>
                                        </li>
                                    </xsl:for-each>
                                </ul>
                            </article>
                        </li>
                    </xsl:for-each>
                </ol>
                <h3>Product ID: <xsl:value-of select="//@product_id"/></h3>
                <p><xsl:value-of select="//product/@description"/></p>
                <table border="1"> 
                    <tr bgcolor="#9acd32"> 
                        <th>Item Number</th> 
                        <th>Price</th> 
                        <th>Gender</th> 
                        <th>Small</th> 
                        <th>Medium</th> 
                        <th>Large</th> 
                        <th>Extra Large</th> 
                    </tr> 
                    <xsl:for-each select="catalog/product/catalog_item">
                    <tr>
                        <td><xsl:value-of select="item_number"/></td> 
                        <td><xsl:value-of select="price"/></td> 
                        <td>
                            <xsl:choose>
                                <xsl:when test="@gender='Men'">M</xsl:when>
                                <xsl:otherwise>W</xsl:otherwise>
                            </xsl:choose>
                        </td> 
                        <td>
                            <table>
                                <xsl:for-each select="size[@description='Small']/color_swatch">
                                    <tr>
                                        <td width="100px"><xsl:value-of select="text()"/></td>
                                        <td width="100px"><xsl:value-of select="@image"/></td>
                                    </tr>
                                </xsl:for-each>
                            </table>
                        </td>  
                        <td>
                            <table>
                                <xsl:for-each select="size[@description='Medium']/color_swatch">
                                    <tr>
                                        <td width="100px"><xsl:value-of select="text()"/></td>
                                        <td width="100px"><xsl:value-of select="@image"/></td>
                                    </tr>
                                </xsl:for-each>
                            </table>
                        </td>  
                        <td>
                            <table>
                                <xsl:for-each select="size[@description='Large']/color_swatch">
                                    <tr>
                                        <td width="100px"><xsl:value-of select="text()"/></td>
                                        <td width="100px"><xsl:value-of select="@image"/></td>
                                    </tr>
                                </xsl:for-each>
                            </table>
                        </td>  
                        <td>
                            <table>
                                <xsl:for-each select="size[@description='Extra Large']/color_swatch">
                                    <tr>
                                        <td width="100px"><xsl:value-of select="text()"/></td>
                                        <td width="100px"><xsl:value-of select="@image"/></td>
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

       