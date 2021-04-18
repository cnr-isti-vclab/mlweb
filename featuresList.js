var app = angular.module('mlapp', []);
app.controller('featuresController', function () {
    features = [
        {
            name: '3D Acquisition: Aligning ',
            image: 'img/Feature/Alignment.jpg',
            description: 'The 3D data alignment phase (also known as registration) is a fundamental step in the pipeline for processing 3D scanned data. MeshLab provides a powerful tool for moving the different meshes into a common reference system, able to manage large set of range-maps. MeshLab implements a fine tuned ICP one-to-one alignment step, followed by a global bundle adjustment error-distribution step. The alignment can be performed on meshes and point clouds coming from several sources, including active (both short- and long-range) scanners and 3D-from-image tools.'
                            },
        {
            name: '3D Acquisition: Reconstruction',
            image: 'img/Feature/Reconstruction.jpg',
            description: 'The process of transforming independent acquisitions, or point clouds, into a single-surface triangulated mesh can be fulfilled with different algorithmic approaches. MeshLab provides several solutions to reconstruct the shape of an object, ranging from volumetric (Marching Cube) to implicit surfaces (Screened Poisson).'
                            },
        {
            name: '3D Acquisition: Color Mapping and Texturing ',
            image: 'img/Feature/Texturing.jpg',
            description: 'Color information may be as important as geometry, but several acquisition technologies do not provide accurate appearance data. MeshLab contains a pipeline for the alignment and projection of color information (from a set of uncalibrated images) onto a 3D model. Several automatic and assisted methods are provided to obtain a high quality color encoding, with both per-vertex or texture mapping.'
                            },
        {
            name: 'Cleaning 3D Models',
            image: 'img/Feature/Cleaning.jpg',
            description: 'MeshLab offers a series of automatic, semi-manual and interactive filters to remove those geometric element generally considered “wrong” by most software and algorithms. It is possible to removing topological errors, duplicated and unreferenced vertices, small components, degenerated or intersecting faces, and many more geometrical and topological singularities. Using different automatic and interactive selection methods, is then possible to isolate and remove unwanted areas of your meshes and point clouds.'
                            },
        {
            name: 'Scaling, Positioning and Orienting',
            image: 'img/Feature/Orientation.jpg',
            description: '3D models, especially coming from survey and scanning, often need to be re-oriented, or placed in a specific reference system; additionally, if they have been generated from 3d-from-photos, they generally need scaling to become metric. MeshLab provides a variety of features to manipulate the scale, positioning and orientation of a 3D model, including basic transformation operations like translation/scaling/rotation, automatic re-centering and alignment to axis, geo-referencing with reference points, interactive manipulators for rotation/translation/scaling, and many others.'
                            },
        {
            name: 'Simplification, Refinement and Remeshing',
            image: 'img/Feature/Remeshing.jpg',
            description: 'A common need when processing a 3D model is to reduce its geometric complexity, creating a geometry with the same shape but with less triangles (or points). MeshLab offers different ways to simplify (decimate) triangulated surfaces, able to preserve geometrical detail and texture mapping, or to selectively reduce the number of points in a pointcloud. In other cases, the user may want to increase the number of triangles (or points): MeshLab also provides different subdivision schemes, remeshing and resampling filters to increase geometric complexity of 3D models, or to optimize point distribution and triangulation quality.'
                            },
        {
            name: 'Measurement, and Analysis',
            image: 'img/Feature/Simplification.jpg',
            description: 'Interactive point-to-point measurement of a 3D model is really easy in MeshLab. Moreover, automatic filters will return various geometric and topological information about your 3D model (or just of a selected area), while the Sectioning tool can export cut-through sections of a mesh as polylines. Different geometric information (like curvature, geodesic distance, or local vertex density) may be calculated on meshes and 3D models using automatic filters.'
                            },
        {
            name: 'Visualization and Presentation',
            image: 'img/Feature/Presentation.jpg',
            description: 'The visualization features of MeshLab (including Decorators and Shaders) can help in graphically present the peculiar characteristics of a 3D model. It is possible to control the camera perspective/orthographic view parameters, and use predefined canonical views. MeshLab also offers a high-resolution screenshot feature, extremely useful in creating a graphical documentation of a survey.'
                            },
        {
            name: 'Color Processing',
            image: 'img/Feature/ColorProcessing.jpg',
            description: 'MeshLab can manipulate the vertex and face colors using a series of photoshop-like filters (gamma, saturation, brightness, contrast, levels, smoothing, sharpening). Automatic filters are available to calculate Ambient Occlusion and Volumetric Obscurance and to map it to vertex or face color. It is also possible to explicitly write color functions, to highlight specific characteristics of the 3D model. MeshLab also offers a painting interface for vertex colors. Scalar values, possibly the result of a metric calculation on the 3D surface, may also be mapped on vertex/face color, to have a visual representation of that value.'
                            },
        {
            name: '3D Printing: Offsetting, Hollowing, Closing',
            image: 'img/Feature/HoleFilling.jpg',
            description: 'Beside being able to export to STL (one of the most common formats for 3D printing), MeshLab can be used to prepare 3D models for printing by creating inner shells, resampling/remeshing the 3D model to make slicing easier, closing small holes to obtain watertight meshes, and flattening the bottom area to have a better platform adherence.'
                            },
        {
            name: 'Comparing Models',
            image: 'img/Feature/Comparing.jpg',
            description: 'Measuring the geometric difference between two 3D models using Hausdorff Distance is a common approach in mesh processing. Many years ago (in 1997!), the Visual Computing Lab developed and freely distributed what become the standard tool for such task, Metro; the related paper has been cited more than one thousand times. While the original Metro tool was a small open source standalone command line program (still available at our web site), MeshLab offers now much more advanced functionalities for comparing two meshes, that also compute signed distance and may work on point clouds.'
                            },
        {
            name: '3D Models Conversion and Interchange',
            image: 'img/Feature/Exporting.jpg',
            description: 'MeshLab can import and export a number of different 3D data formats and to online services like SketchFab. In this way it is possible for the user to interchange data with other tools (including Blender, Photoscan, VisualSfM, Cloud Compare, Autodesk tools), working in the context of complex 3D processing pipelines in a number of different contexts and applications. The scripting functionalities will make this type of use even easier and unattended.'
                            },
        {
            name: 'Raster Layers: Integration with Images',
            image: 'img/Feature/Raster.jpg',
            description: 'Raster Layers have been introduced in MeshLab to allow to go beyond the standard 3D model. MeshLab users can import in a project also images and other 2D entities. These Raster Layers can be used not only to project color information on the 3D model, but also to generate peculiar points of view, or store an entire 3d-from-image acquisition procedure by including also the images used for the generation of the final results.'
                            }


            ]

    this.features1 = features.splice(0, Math.ceil(features.length / 2));
    this.features2 = features;
    /**********************************************************************
    A few notes on how to compile this list: 
    - As venue we use the format in our vclab publications page (without the year)
    - First Name just the initials.
    - 
    ***********************************************************************/
    this.papers = [
        {
            description: 'General MeshLab citation. It should be used whenever you use MeshLab for many small things during your research.',
            paperTitle: 'MeshLab: an Open-Source Mesh Processing Tool',
            paperVenue: 'Sixth Eurographics Italian Chapter Conference, page 129-136',
            paperAuthors: 'P. Cignoni, M. Callieri, M. Corsini, M. Dellepiane, F. Ganovelli, G. Ranzuglia',
            paperYear: '2008',
            paperPDF: 'http://vcg.isti.cnr.it/Publications/2008/CCCDGR08/MeshLabEGIT.final.pdf',
            bibtex: '@inproceedings {LocalChapterEvents:ItalChap:ItalianChapConf2008:129-136,\
                        booktitle = {Eurographics Italian Chapter Conference},\
                        editor = {Vittorio Scarano and Rosario De Chiara and Ugo Erra},\
                        title = {{MeshLab: an Open-Source Mesh Processing Tool}},\
                        author = {Cignoni, Paolo and Callieri, Marco and Corsini, Massimiliano and Dellepiane, Matteo and Ganovelli, Fabio and Ranzuglia, Guido},\
                        year = {2008},\
                        publisher = {The Eurographics Association},\
                        ISBN = {978-3-905673-68-5},\
                        DOI = {10.2312/LocalChapterEvents/ItalChap/ItalianChapConf2008/129-136}\
                        }'
                   },
        {
            description: 'More specific citation if you have used the Meshlab in 3D scanning with color pipelines, like for example when you use MeshLab in a archeological project to finish up textured models.',
            paperTitle: 'MeshLab as a complete tool for the integration of photos and color with high resolution 3D geometry data',
            paperVenue: 'CAA 2012 Conference Proceedings, page 406-416',
            paperAuthors: 'G. Ranzuglia, M. Callieri, M. Dellepiane, P. Cignoni, R. Scopigno',
            paperYear: '2013',
            paperPDF: 'http://vcg.isti.cnr.it/Publications/2013/RCDCS13/MeshLab_Color.pdf',
            bibtex: '@InProceedings {RCDCS13,\
                        author       = "Ranzuglia, Guido and Callieri, Marco and Dellepiane, Matteo and Cignoni, Paolo and Scopigno, Roberto",\
                        title        = "MeshLab as a complete tool for the integration of photos and color with high resolution 3D geometry data",\
                        booktitle    = "CAA 2012 Conference Proceedings",\
                        pages        = "406-416",\
                        year         = "2013",\
                        publisher    = "Pallas Publications - Amsterdam University Press (AUP)",\
                        url          = "http://vcg.isti.cnr.it/Publications/2013/RCDCS13"\
                        }'
                   },
        {
            description: 'When using MeshLab for computing differences between meshes using Hausdorff Distance',
            paperTitle: 'Metro: measuring error on simplified surfaces',
            paperVenue: 'Computer Graphics Forum 17 (2), 167-174',
            paperAuthors: 'P. Cignoni, C. Rocchini, R. Scopigno',
            paperYear: '1998',
            paperPDF: 'http://vcg.isti.cnr.it/publications/papers/metro.pdf',
            bibtex: '@inproceedings {cignoni1998metro,\
                        title={Metro: measuring error on simplified surfaces},\
                        author={Cignoni, Paolo and Rocchini, Claudio and Scopigno, Roberto},\
                        booktitle={Computer Graphics Forum},\
                        volume={17},\
                        number={2},\
                        pages={167--174},\
                        year={1998},\
                        organization={Blackwell Publishers}\
                     }'
        },
        {
            description: 'When using MeshLab to generate well distributed (Poisson Disk) point sampling over mesh surfaces or when used to uniformly simplify large point clouds.',
            paperTitle: 'Efficient and Flexible Sampling with Blue Noise Properties of Triangular Meshes',
            paperVenue: 'IEEE Trans. on Visualization and Computer Graphics, Vol. 18, Num. 6, page 914--924',
            paperAuthors: 'G. Ranzuglia, M. Callieri, M. Dellepiane, P. Cignoni, R. Scopigno',
            paperYear: '2012',
            paperPDF: 'http://vcg.isti.cnr.it/Publications/2012/CCS12/TVCG-2011-07-0217.pdf',
            bibtex: '@Article\{CCS12,\
                      author       = "Corsini, Massimiliano and Cignoni, Paolo and Scopigno, Roberto",\
                      title        = "Efficient and Flexible Sampling with Blue Noise Properties of Triangular Meshes",\
                      journal      = "IEEE Transaction on Visualization and Computer Graphics",\
                      number       = "6",\
                      volume       = "18",\
                      pages        = "914--924",\
                      year         = "2012",\
                      note         = "http://doi.ieeecomputersociety.org/10.1109/TVCG.2012.34",\
                      url          = "http://vcg.isti.cnr.it/Publications/2012/CCS12"\
                    }'
                   },
        {
            description: 'When using Screened Poisson Surface Reconstruction algorithm to build a triangulated mesh out of a point cloud.',
            paperTitle: 'Screened poisson surface reconstruction',
            paperVenue: 'ACM Transactions on Graphics (TOG), 32(3), 29',
            paperAuthors: 'M. Kazhdan, H. Hoppe',
            paperYear: '2013',
            paperPDF: 'http://www.cs.jhu.edu/~misha/MyPapers/ToG13.pdf',
            bibtex: '@article{kazhdan2013screened,\
                      title={Screened poisson surface reconstruction},\
                      author={Kazhdan, Michael and Hoppe, Hugues},\
                      journal={ACM Transactions on Graphics (TOG)},\
                      volume={32},\
                      number={3},\
                      pages={29},\
                      year={2013},\
                      publisher={ACM}\
                    }'
                   },
        {
            description: 'When using the many functionalities for transfering attributes between meshes and textures.',
            paperTitle: 'Preserving attribute values on simplified meshes by resampling detail textures',
            paperVenue: 'The Visual Computer, 15 (9)',
            paperAuthors: 'Paolo Cignoni, Claudio Montani, Claudio Rocchini, Roberto Scopigno, Marco Tarini',
            paperYear: '1999',
            paperPDF: 'http://vcg.isti.cnr.it/publications/papers/preservingtvc.pdf',
            bibtex: '@article{PTC10,\
                      title={Preserving attribute values on simplified meshes by resampling detail textures},\
                      author={Cignoni, Paolo and Montani, Claudio and Rocchini, Claudio and Scopigno, Roberto and Tarini, Marco},\
                      journal={The Visual Computer},\
                      volume={15},\
                      number={10},\
                      pages={519--539},\
                      year={1999},\
                      publisher={Springer}\
                    }'
                   },
        {
            description: 'When using the isoparametric mesh parametrization algorithm for remeshing surfaces.',
            paperTitle: 'Almost isometric mesh parameterization through abstract domains',
            paperVenue: 'IEEE Transaction on Visualization and Computer Graphics, Volume 16, Number 4',
            paperAuthors: 'Nico Pietroni, Marco Tarini, Paolo Cignoni',
            paperYear: '2010',
            paperPDF: 'http://vcg.isti.cnr.it/Publications/2010/PTC10/Pietroni%20Tarini%20Cignoni%20-%20Almost%20isometric%20mesh%20parameterization%20-%20TVCG%202009.pdf',
            bibtex: '@article{PTC10,\
                      author       = {Pietroni, Nico and Tarini, Marco and Cignoni, Paolo},\
                      title        = {Almost isometric mesh parameterization through abstract domains},\
                      journal      = {IEEE Transaction on Visualization and Computer Graphics},\
                      number       = {4},\
                      volume       = {16},\
                      year         = {2010},\
                    }'
                   },
        {
            description: 'When using the quad and tri-to-quad functionalities to automatically convert a triangular mesh into a quad mesh.',
            paperTitle: 'Practical quad mesh simplification ',
            paperVenue: 'Computer Graphics Forum 29 (2), 407-418 ',
            paperAuthors: 'M Tarini, N Pietroni, P Cignoni, D Panozzo, E Puppo',
            paperYear: '2010',
            paperPDF: 'http://vcg.isti.cnr.it/quadSemplif/Tarini%20Pietroni%20Cignoni%20Panozzo%20Puppo%20-%20Practical%20Quad%20Semplification%20-%20EG%202010.pdf',
            bibtex: '@Article\{TPCPP10,\
                      author       = {Tarini, Marco and Pietroni, Nico and Cignoni, Paolo and Panozzo, Daniele and Puppo, Enrico},\
                      title        = {Practical quad mesh implification},\
                      journal      = {Computer Graphics Forum (Special Issue of Eurographics 2010 Conference)},\
                      number       = 2,\
                      volume       = 29,\
                      year         = 200,\
                      url          = http://vcg.isti.cnr.it/Publications/2010/TPCPP10\
                     }'
                },
        {
            description: 'When using Radiance Scaling shader effect to enhance the surface features.',
            paperTitle: 'Radiance scaling for versatile surface enhancement',
            paperVenue: 'Proceedings of the 2010 ACM SIGGRAPH symposium on Interactive 3D Graphics and Games (pp. 143-150). ACM',
            paperAuthors: 'R. Vergne, R. Pacanowski, P. Barla, X. Granier, C. Schlick',
            paperYear: '2010',
            paperPDF: 'https://hal.inria.fr/inria-00449828/file/RadianceScaling.pdf',
            bibtex: '@inproceedings{vergne2010radiance,\
                        title={Radiance scaling for versatile surface enhancement},\
                        author={Vergne, Romain and Pacanowski, Romain and Barla, Pascal and Granier, Xavier and Schlick, Christophe},\
                        booktitle={Proceedings of the 2010 ACM SIGGRAPH symposium on Interactive 3D Graphics and Games},\
                        pages={143--150},\
                        year={2010},\
                        organization={ACM}\
                        }'
                   },
        ]
});