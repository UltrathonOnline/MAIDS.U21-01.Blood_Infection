# LOAD LIBS
import argparse, os
from helperXML import xmlfile2dict, xmlstr2dict, XmlDictConfig

# HANDLE ARGUMENTS
def getArguments():
    '''
    Parse command line arguments if __name__ == "__main__".
    '''
    parser = argparse.ArgumentParser(prog="xml2htmlPurpose.py", description = "Convert XML to handlebars object.")
    parser.add_argument("xml", help="Path to 'purpose and ethics' xml file.")
    parser.add_argument("html", help="Path to output html file.")
    return (parser.parse_args())

# DEFINE TEMPLATES
def getTemplate(template):
    '''
    Template strings for various HTML.
    '''
    return ({
        #:> Main document template
        "document"   : "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n\n<script type=\"text/javascript\">\nvar filledHandle = template({{\n{KEY}:[\n{VALUE}],\n}})\n</script>\n\n</body></html>",
        #:> Templates for PURPOSE and ETHICS
        "category"   : "{{category:{{\nid:\"{ID}\",\nname:\"{NAME}\",\ncode:\"{CODE}\",\ndescription:\"{DESCRIPTION}\",\nentries:[\n{ENTRIES}]}}}},\n",
        "entry"      : "{{entry: {{id:\"{ID}\", answer:\"{ANSWER}\", by:\"{BY}\", on:\"{ON}\", question:\"{QUESTION}\", help:\"{HELP}\"}}}},\n",
        #:> Templates for FEATURE DESCRIPTION
        "subset"     : "{{subset: {{\nid:\"{ID}\",\nname:\"{NAME}\",\nupdated:\"{UPDATED}\",\nmodality:\"{MODALITY}\",\nformat:\"{FORMAT}\",\nsize:\"{SIZE}\",\nfeatureCount:\"{FEATCOUNT}\",\nparentid:\"{PARENTID}\",\ncovmat:\"{COVMAT}\",\nmodsys:\"{MODSYS}\",\npurpose:\"{PURPOSE}\",\nlink:\"{LINK}\",\nfeatures:[\n{FEATURES}]}}}},\n",
        "feature"    : "{{feature: {{id:\"{ID}\",date:\"{DATE}\",name:\"{NAME}\",values:\"{VALUES}\",meaningNaNullNone:\"{MEANINGNANULLNONE}\",meaningZero:\"{MEANINGZERO}\",meaningBlankVoid:\"{MEANINGBLANKVOID}\",sparsity:\"{SPARSITY}\",mean:\"{MEAN}\",std:\"{STD}\",modality:\"{MODALITY}\",median:\"{MEDIAN}\",iqr:\"{IQR}\",parents:\"{PARENTIDS}\",unit:\"{UNIT}\",definition:\"{DEFINITION}\",purpose:\"{PURPOSE}\",encoding:\"{ENCODING}\"}}}},\n",
        #:> Templates for KEYWORDS and DEFINITIONS
        "definition" : "{{definition:{{id:\"{ID}\",keyword:\"{KW}\",definition:\"{DEFINITION}\",link:\"{LINK}\"}}}},\n",
        #:> Templates for ABOUT
        "about"      : "title:\"{TITLE}\",repository:\"{REPO}\",authors:[{AUTHORS}],scores:{{ {DOCSCORE},{FAIRSCORE},{MAGSCORE},{SYNSCORE}, }},thematic:{{ filename:\"{THEMEFILE}\", }},abstract:\"{ABSTRACT}\",usecases:[{USECASES}],research:{{main:\"{MAINRES}\",secondary:\"{SECONDRES}\"}},figures:[{FIGURES}],subsetAssociations:{{filename: \"{SUBSETFILE}\",legend:\"{SUBSETLEGEND}\",}}",
        "author"     : "{{author: {{firstnames: \"{FIRSTNAMES}\", lastname: \"{LASTNAME}\", email: \"{EMAIL}\",}},}},",
        "score"      : "{TYPE}: {{score:\"{SCORE}\",comment:\"{COMMENT}\",evaluator:{{entityType:\"{ENTITYTYPE}\",entityName:\"{ENTITYNAME}\",contactName:\"{CONTACTNAME}\",contactEmail:\"{CONTACTEMAIL}\",}},}}",
        "usecase"    : "{{usecase: \"{USECASE}\",}},",
        "figure"     : "{{figure: {{filename:\"{FILENAME}\",title:\"{TITLE}\",legend:\"{LEGEND}\"}},}},",
        #:> Templates for VERSION and TEMPLATE
        "vers_prov"  : "{VERSION},{PROVENANCE}",
        "version"    : "version: {{ scores: \"{SCORES}\", description: \"{DESCRIPTION}\", questionnaire: \"{QUESTIONNAIRE}\", subsets: \"{SUBSETS}\", synthetic: \"{SYNTHETIC}\", }}",
        "provenance" : "provenance: {{ template: {{ commit: \"{TEMPLATE_COMMIT}\", tag: \"{TEMPLATE_TAG}\", }}, specification: {{ commit: \"{SPECIFICATION_COMMIT}\", tag: \"{SPECIFICATION_TAG}\", }}, }}"
    }[template])

# PARSE XML
def parseXML(xmlObj, checkname):
    '''
    Parse XML file into a dictionary.
    '''
    if os.path.isfile(xmlObj):
        mydict = xmlfile2dict(xmlObj)
    else:
        mydict = xmlstr2dict(xmlObj)
    checkXMLDictObject(mydict, checkname)
    return (mydict)

def checkXMLDictObject(obj, checkname):
    if (not obj):
        exit("XML not parsed successfully.")
    if checkname != None:
        if ("name" not in obj.keys() or obj['name'] != checkname):
            exit("XML not recognized, please make sure it is correct.")

# Format data in HTML
def formatHTML(xmlDict, checkname):
    '''
    Format parsed XML into HTML using the template strings.
    '''
    html = {
        "QUESTIONNAIRE": formatHTML_QUESTIONNAIRE,
        "FEATURE"      : formatHTML_FEATURE,
        "DEFINITION"   : formatHTML_DEFINITION,
        "ABOUT"        : formatHTML_ABOUT,
        "PROVENANCE"   : formatHTML_PROVENANCE
    }[checkname](xmlDict)
    return (html)

def formatHTML_QUESTIONNAIRE(xmlDict):
    '''
    This function specifically formats QUESTIONNAIRE data.
    '''
    categories = ""
    questionnaire = xmlDict['questionnaire']
    i = 0
    for catid in questionnaire.keys():
        i += 1
        #- Get top level data
        catid        = "category_" + str(i)
        name         = questionnaire[catid]['name']
        code         = questionnaire[catid]['code']
        description  = questionnaire[catid]['description']
        questions    = questionnaire[catid]['questions']
        messages     = questionnaire[catid]['messages']
        answers      = questionnaire[catid]['answers']
        #- Create array of entries using template
        entries = ""
        for j in range(len(questions)):
            ID       = f"{j+1}"
            ANSWER   = answers[f"A{j}"]
            BY       = ""
            ON       = ""
            QUESTION = questions[f"Q{j}"]
            HELP     = messages[f"M{j}"]
            entries += getTemplate("entry").format(ID=ID,ANSWER=ANSWER,BY=BY,ON=ON,QUESTION=QUESTION,HELP=HELP)
        #- Create array of categories using template
        categories += getTemplate("category").format(ID=i,NAME=name,CODE=code,DESCRIPTION=description,ENTRIES=entries)
    return (categories)

def formatHTML_FEATURE(xmlDict):
    '''
    This function specifically formats FEATURE_DESCRIPTION data.
    '''
    subsets  = ""
    dictSubsets = xmlDict['Subset_Feature_Dataset']
    for i in range(1,len(dictSubsets)+1):
        dictSubset   = dictSubsets[f"Subset_{i}"]
        dictFeatures = dictSubset['Features']
        #- Create array of entries using template
        features = ""
        j = 0
        if isinstance(dictFeatures, XmlDictConfig):
            for fKey in dictFeatures.keys():
                j += 1
                dictFeature = dictFeatures[fKey]
                #- Get subset data
                features += getTemplate("feature").format(
                    ID = dictFeature['ID'] , DATE = dictFeature['Introduction'] , NAME = dictFeature['Name'] ,
                    VALUES = dictFeature['Values'] , MEANINGNANULLNONE = dictFeature['Meaning_NA_NULL_NONE_OTHER'] ,
                    MEANINGZERO = dictFeature['Meaning_Zero'] , MEANINGBLANKVOID = dictFeature['Meaning_BlankVoid'] ,
                    SPARSITY = dictFeature['Sparsity'] , MEAN = dictFeature['Mean'] , STD = dictFeature['Std'] , 
                    MODALITY = dictFeature['Modality'] , MEDIAN = dictFeature['Median'] , IQR = dictFeature['IQR'] ,
                    PARENTIDS = dictFeature['ParentIDs'] , UNIT = dictFeature['Unit'] , DEFINITION = dictFeature['Definition'] ,
                    PURPOSE = dictFeature['Purpose'] , ENCODING = dictFeature['Encoding']
                )
        #- Create array of subsets using template
        link = dictSubset['Link']
        if (not link): link = ""
        subsets += getTemplate("subset").format(
            ID = dictSubset['ID'] ,
            NAME = dictSubset['Name'],
            UPDATED = dictSubset['LastUpdate'],
            MODALITY = dictSubset['Modality'],
            FORMAT = dictSubset['Format'],
            SIZE = dictSubset['Size'],
            FEATCOUNT = j,
            PARENTID = dictSubset['ParentID'],
            COVMAT = dictSubset['Covmat'],
            MODSYS = dictSubset['Modsys'],
            PURPOSE = dictSubset['Purpose'],
            LINK = link,
            FEATURES = features
        )
    return (subsets)

def formatHTML_DEFINITION(xmlDict):
    '''
    This function specifically formats KEYWORDS_and_DEFINITIONS data.
    '''
    definitions = ""
    keywords = xmlDict['Keywords_Dataset']
    if not keywords or len(keywords) == 0:
        return (definitions)
    i = 0
    for kwid in keywords.keys():
        i += 1
        #- Get top level data
        kw         = keywords[kwid]['Keyword']
        definition = keywords[kwid]['Definition']
        link       = keywords[kwid]['Link']
        if (not link): link = ""
        #- Create array of categories using template
        definitions += getTemplate("definition").format(ID=i,KW=kw,DEFINITION=definition,LINK=link)
    return (definitions)

def formatHTML_ABOUT(xmlDict):
    '''
    This function specifically formats PURPOSE_and_ETHICS data.
    '''
    #Format authors
    authors = ""
    for author in xmlDict["authors"]["answer"].values():
        authors += getTemplate("author").format(FIRSTNAMES=author["firstnames"], LASTNAME=author["lastname"], EMAIL=author["email"])

    #Format scores
    scores = {}
    for scoreType in ["document", "fairness", "magnitude", "synthetic"]:
        scores[scoreType] = xmlDict["scores"][scoreType]
        scores[scoreType] = getTemplate("score").format(
            TYPE         = scoreType,
            SCORE        = scores[scoreType]["score"]["answer"],
            COMMENT      = scores[scoreType]["comment"]["answer"],
            ENTITYTYPE   = scores[scoreType]["evaluator"]["entityType"]["answer"],
            ENTITYNAME   = scores[scoreType]["evaluator"]["entityName"]["answer"],
            CONTACTNAME  = scores[scoreType]["evaluator"]["contactName"]["answer"],
            CONTACTEMAIL = scores[scoreType]["evaluator"]["contactEmail"]["answer"]
        )
    
    #Format usecases
    usecases = ""
    for usecase in xmlDict["usecases"]["answer"].values():
        usecases += getTemplate("usecase").format(USECASE = usecase)
    
    #Format figures
    figures = ""
    if xmlDict["figures"]["answer"]:
        for figure in xmlDict["figures"]["answer"].values():
            figures += getTemplate("figure").format(FILENAME = figure["filename"], TITLE = figure["title"], LEGEND = figure["legend"])

    #Handle EMPTY thematic
    # if (not xmlDict["thematic"]["filename"]):
    #     xmlDict["thematic"]["filename"] = "thematic.png"
    
    #Handle EMPTY subsetAssociations
    # if (not xmlDict["subsetAssociations"]["filename"]):
    #     xmlDict["subsetAssociations"]["filename"] = "datasetassociations.jpg"
    #     xmlDict["subsetAssociations"]["legend"]["answer"] = "An example of how 3 different subsets are connected by a patient identifier. The aspect ratio is 5 to 3.5."

    #Format about & return
    about = getTemplate("about").format(
        TITLE     = xmlDict["title"]["answer"],
        REPO      = xmlDict["repository"]["answer"],
        AUTHORS   = authors,
        DOCSCORE  = scores["document"],
        FAIRSCORE = scores["fairness"],
        MAGSCORE  = scores["magnitude"],
        SYNSCORE  = scores["synthetic"],
        THEMEFILE = xmlDict["thematic"]["filename"],
        ABSTRACT  = xmlDict["abstract"]["answer"],
        USECASES  = usecases,
        MAINRES   = xmlDict["research"]["main"]["answer"],
        SECONDRES = xmlDict["research"]["secondary"]["answer"],
        FIGURES   = figures,
        SUBSETFILE   = xmlDict["subsetAssociations"]["filename"],
        SUBSETLEGEND = xmlDict["subsetAssociations"]["legend"]["answer"])
    return (about)

def formatHTML_PROVENANCE(xmlDict):
    '''
    This function specifically formats VERSION_an_PROVENANCE data.
    '''
    version = getTemplate('version').format(SCORES=xmlDict['version']['scores'],DESCRIPTION=xmlDict['version']['description'],QUESTIONNAIRE=xmlDict['version']['questionnaire'],SUBSETS=xmlDict['version']['subsets'],SYNTHETIC=xmlDict['version']['synthetic'])
    provenance = getTemplate('provenance').format(TEMPLATE_COMMIT=xmlDict['provenance']['template']['commit'],TEMPLATE_TAG=xmlDict['provenance']['template']['tag'],SPECIFICATION_COMMIT=xmlDict['provenance']['specification']['commit'],SPECIFICATION_TAG=xmlDict['provenance']['specification']['tag'])
    return (getTemplate('vers_prov').format(VERSION=version, PROVENANCE=provenance))

def getHTML(xml, checkname = None):
    xmldict = parseXML(xml, checkname)
    html = formatHTML(xmldict, xmldict["name"])
    return (html)

def getFIGURES(xml):
    xmldict = parseXML(xml, "ABOUT")
    figures = [xmldict['thematic']['filename']]
    figures.append(xmldict['subsetAssociations']['filename'])
    if xmldict['figures']['answer']:
        figures += [figDict['filename'] for figName, figDict in xmldict['figures']['answer'].items()]
    return (figures)

# WRITE HTML HANDLEBARS OBJECT
if __name__ == '__main__':
    args = getArguments()
    html = getHTML(args.xml)
    contents = getTemplate("document").format(KEY="generic", VALUE=html)
    with open(args.html, 'w') as o:
        o.write(contents)
