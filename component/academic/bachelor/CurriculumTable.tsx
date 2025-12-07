"use client";

import React from 'react';
import curriculum from '@/data/curriculum';

interface Course {
    code: string | null;
    name: string;
    sks: number;
}

interface Track {
    name: string;
    courses: Course[];
}

// Helper to render a table for a list of courses
const CourseTableBody = ({ courses, startIndex = 0 }: { courses: Course[], startIndex?: number }) => (
    <tbody className="text-gray-700 text-sm">
        {courses.map((course, index) => (
            <tr 
                key={index} 
                className={`border-b border-gray-200 hover:bg-blue-50/30 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
                <td className="p-3 border-r border-gray-200 text-center font-medium">{startIndex + index + 1}</td>
                <td className="p-3 border-r border-gray-200 font-mono text-xs md:text-sm">
                    {course.code || <span className="text-gray-400 italic"> - </span>}
                </td>
                <td className="p-3 border-r border-gray-200 font-medium text-[#0C1B43]">{course.name}</td>
                <td className="p-3 text-center font-bold text-[#0C1B43]">{course.sks}</td>
            </tr>
        ))}
    </tbody>
);

// Helper to render the table headers
const CourseTableHeader = () => (
    <thead>
        <tr className="bg-gray-50 border-b border-gray-200 text-[#0C1B43] text-sm uppercase font-bold">
            <th className="p-4 border-r border-gray-200 w-16 text-center">NO</th>
            <th className="p-4 border-r border-gray-200 w-32">KODE MK</th>
            <th className="p-4 border-r border-gray-200">SUBJECT</th>
            <th className="p-4 w-48 text-center bg-gray-100/50">CREDIT POINTS (SKS)</th>
        </tr>
    </thead>
);

export default function CurriculumTable() {
    return (
        <div className="w-full mt-8 font-sans space-y-12">
            {curriculum.semesters.map((sem: any) => (
                <div key={sem.semester} className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#0C1B43] uppercase tracking-wide border-l-4 border-[#F2C94C] pl-3">
                        SEMESTER {sem.semester}
                    </h3>
                    
                    {/* Standard Courses */}
                    {sem.courses && (
                        <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
                            <table className="w-full text-left border-collapse">
                                <CourseTableHeader />
                                <CourseTableBody courses={sem.courses} />
                                <tfoot>
                                    <tr className="bg-[#0C1B43] text-white font-bold">
                                        <td colSpan={3} className="p-4 text-left md:pl-8">TOTAL</td>
                                        <td className="p-4 text-center text-lg">{sem.total_sks}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    )}

                    {/* Tracks (Semester 6) */}
                    {sem.tracks && (
                        <div className="space-y-6">
                            {sem.tracks.map((track: Track, idx: number) => (
                                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                    <h4 className="text-lg font-bold text-slate-800 mb-3 ml-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                        Track: {track.name}
                                    </h4>
                                    <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200 bg-white">
                                        <table className="w-full text-left border-collapse">
                                            <CourseTableHeader />
                                            <CourseTableBody courses={track.courses} />
                                        </table>
                                    </div>
                                </div>
                            ))}
                             <div className="flex justify-end p-2">
                                <span className="bg-[#0C1B43] text-white font-bold px-6 py-3 rounded-lg">
                                    Total SKS: {sem.total_sks}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {/* Elective Modules */}
            <div className="space-y-4 pt-8 border-t-2 border-dashed border-gray-200">
                <h3 className="text-xl font-semibold text-[#0C1B43] uppercase tracking-wide border-l-4 border-indigo-500 pl-3">
                    ELECTIVE MODULES
                </h3>
                <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
                    <table className="w-full text-left border-collapse">
                        <CourseTableHeader />
                        <CourseTableBody courses={curriculum.elective_modules} />
                    </table>
                </div>
            </div>

            {/* MKPK Modules */}
             <div className="space-y-4 pt-8 border-t-2 border-dashed border-gray-200">
                <h3 className="text-xl font-semibold text-[#0C1B43] uppercase tracking-wide border-l-4 border-green-500 pl-3">
                    MKPK MODULES (Merdeka Belajar)
                </h3>
                 <p className="text-gray-600 mb-2 italic">Courses available for the "Merdeka Belajar Kampus Merdeka" program.</p>
                <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
                    <table className="w-full text-left border-collapse">
                        <CourseTableHeader />
                        <CourseTableBody courses={curriculum.mkpk_modules} />
                    </table>
                </div>
            </div>

        </div>
    );
}
